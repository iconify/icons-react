import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz1pvbcft.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz1pvbcft"/>`,
		"fallback": "entypo:untag",
	});
}

export default Component;

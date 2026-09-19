import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oljc8sjpx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oljc8sjpx"/>`,
		"fallback": "entypo:sound-mix",
	});
}

export default Component;

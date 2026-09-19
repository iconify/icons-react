import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n050cnbpt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n050cnbpt"/>`,
		"fallback": "entypo:time-slot",
	});
}

export default Component;

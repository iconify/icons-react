import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlu0ygy0d.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlu0ygy0d"/>`,
		"fallback": "fa6-solid:square-pen",
	});
}

export default Component;

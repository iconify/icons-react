import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de5b7ebfb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de5b7ebfb"/>`,
		"fallback": "fa-solid:times-circle",
	});
}

export default Component;

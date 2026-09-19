import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoti3ubhb.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoti3ubhb"/>`,
		"fallback": "fa6-solid:people-robbery",
	});
}

export default Component;

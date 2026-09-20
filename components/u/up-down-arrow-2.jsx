import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/smh1t7bzl.css';
import '../../css/i/i9jp5d3xr.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="smh1t7bzl"/><path class="i9jp5d3xr"/></g>`,
		"fallback": "marketeq:up-down-arrow-2",
	});
}

export default Component;

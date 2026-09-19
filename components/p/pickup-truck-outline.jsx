import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8wgsx-ss.css';
import '../../css/v/v-u4xgb6a.css';
import '../../css/k/k0zq50brr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b8wgsx-ss"/><path clip-rule="evenodd" class="v-u4xgb6a"/><path class="k0zq50brr"/></g>`,
		"fallback": "glyphs:pickup-truck-outline",
	});
}

export default Component;

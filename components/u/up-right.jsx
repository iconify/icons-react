import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv2l5-hbm.css';
import '../../css/j/jw1hfib5l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGVLcjBd1s" class="tv2l5-hbm"/><path id="SVGhvPpKd0d" class="jw1hfib5l"/></defs><use href="#SVGVLcjBd1s"/><use href="#SVGhvPpKd0d"/><use href="#SVGVLcjBd1s"/><use href="#SVGhvPpKd0d"/>`,
		"fallback": "flat-color-icons:up-right",
	});
}

export default Component;

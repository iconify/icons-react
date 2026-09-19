import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc9wrxdmw.css';
import '../../css/d/dz7d0mbwh.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGtdziAeMj" class="bc9wrxdmw"/><path id="SVGZ6VuEeVE" class="dz7d0mbwh"/></defs><g class="cuyn6tgcc"><use href="#SVGtdziAeMj"/><use href="#SVGZ6VuEeVE" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGtdziAeMj"/><use href="#SVGZ6VuEeVE" clip-rule="evenodd" class="d2kvgvbvc"/></g>`,
		"fallback": "healthicons:physical-therapy",
	});
}

export default Component;

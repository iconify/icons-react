import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh689tbvl.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/j/jkq1btb-j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGWpP3iexr)" class="xh689tbvl"/><defs><radialGradient id="SVGWpP3iexr" cx="0" cy="0" r="1" gradientTransform="rotate(51.233 5.676 -2.753)scale(46.3543 39.1607)" gradientUnits="userSpaceOnUse"><stop offset=".283" class="ol7cejbxg"/><stop offset="1" class="jkq1btb-j"/></radialGradient></defs></g>`,
		"fallback": "fluent-color:share-ios-32",
	});
}

export default Component;

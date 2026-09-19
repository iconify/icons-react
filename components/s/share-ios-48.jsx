import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxsid9bbk.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/j/jkq1btb-j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGWosyH4zc)" class="nxsid9bbk"/><defs><radialGradient id="SVGWosyH4zc" cx="0" cy="0" r="1" gradientTransform="rotate(51.69 7.608 -1.376)scale(64.8272 54.5673)" gradientUnits="userSpaceOnUse"><stop offset=".283" class="ol7cejbxg"/><stop offset="1" class="jkq1btb-j"/></radialGradient></defs></g>`,
		"fallback": "fluent-color:share-ios-48",
	});
}

export default Component;

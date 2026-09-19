import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijs4-unkv.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/j/jkq1btb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGQjhRmech)" class="ijs4-unkv"/><defs><radialGradient id="SVGQjhRmech" cx="0" cy="0" r="1" gradientTransform="rotate(51.69 3.804 -.688)scale(32.4136 27.2837)" gradientUnits="userSpaceOnUse"><stop offset=".283" class="ol7cejbxg"/><stop offset="1" class="jkq1btb-j"/></radialGradient></defs></g>`,
		"fallback": "fluent-color:share-ios-24",
	});
}

export default Component;

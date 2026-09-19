import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4ep25hsj.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/j/jkq1btb-j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGf7cYAdeS)" class="m4ep25hsj"/><defs><radialGradient id="SVGf7cYAdeS" cx="0" cy="0" r="1" gradientTransform="rotate(52.105 2.876 .332)scale(25.4447 21.3416)" gradientUnits="userSpaceOnUse"><stop offset=".283" class="ol7cejbxg"/><stop offset="1" class="jkq1btb-j"/></radialGradient></defs></g>`,
		"fallback": "fluent-color:share-ios-20",
	});
}

export default Component;

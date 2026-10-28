import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jijs-abeb.css';
import '../../css/d/dfk32absk.css';
import '../../css/k/k7byg-byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="jijs-abeb"/><path class="dfk32absk"/><path class="k7byg-byb"/></g>`,
		"fallback": "codex:unlock",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ivum-mb2j.css';
import '../../css/d/deohuwbcr.css';
import '../../css/j/j0frwub-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ivum-mb2j"/><path class="deohuwbcr"/><path class="j0frwub-e"/></g>`,
		"fallback": "mage:robot-uwu",
	});
}

export default Component;

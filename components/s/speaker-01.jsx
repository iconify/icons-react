import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r1ddgfbve.css';
import '../../css/y/y2crqebri.css';
import '../../css/u/u0-5l2byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r1ddgfbve"/><circle class="y2crqebri"/><path class="u0-5l2byh"/></g>`,
		"fallback": "hugeicons:speaker-01",
	});
}

export default Component;

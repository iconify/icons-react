import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pt6j8yqtd.css';
import '../../css/a/a13beybmo.css';
import '../../css/f/fgizidusj.css';
import '../../css/u/usupnnbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pt6j8yqtd"/><path class="a13beybmo"/><path class="fgizidusj"/><path class="usupnnbey"/></g>`,
		"fallback": "solar:reorder-2-broken",
	});
}

export default Component;

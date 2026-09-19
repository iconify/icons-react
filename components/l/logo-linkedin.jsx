import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hs-lbo_cy.css';
import '../../css/z/zajeq1byo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hs-lbo_cy"/><path clip-rule="evenodd" class="zajeq1byo"/></g>`,
		"fallback": "gravity-ui:logo-linkedin",
	});
}

export default Component;

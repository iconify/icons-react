import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pger3ebjv.css';
import '../../css/x/x8uhnoe8j.css';
import '../../css/q/qme253ihi.css';
import '../../css/v/vuqt7lwmf.css';
import '../../css/y/yzzo924cy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pger3ebjv"/><path class="x8uhnoe8j"/><path class="qme253ihi"/><path class="vuqt7lwmf"/><path class="yzzo924cy"/>`,
		"fallback": "carbon:rotate-180",
	});
}

export default Component;

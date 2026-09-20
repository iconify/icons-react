import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apmey5ikj.css';
import '../../css/r/rn5l7u0ji.css';
import '../../css/q/qmx_0jbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apmey5ikj"/><path class="rn5l7u0ji"/><path class="qmx_0jbvl"/>`,
		"fallback": "lineicons:rocket-5",
	});
}

export default Component;

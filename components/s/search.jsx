import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jqm63dyww.css';
import '../../css/m/mvo2n9bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="jqm63dyww"/><path class="mvo2n9bru"/></g>`,
		"fallback": "lets-icons:search",
	});
}

export default Component;

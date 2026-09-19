import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q8fo18bjn.css';
import '../../css/u/u504mvb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q8fo18bjn"/><path class="u504mvb5c"/></g>`,
		"fallback": "healthicons:risk-analysis-24px",
	});
}

export default Component;

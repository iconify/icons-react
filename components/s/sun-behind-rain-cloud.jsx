import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/on3ho5bwk.css';
import '../../css/v/v_63aev3a.css';
import '../../css/n/nieh-2j7u.css';
import '../../css/e/e9ssrfudc.css';
import '../../css/q/qmm4abdtb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="on3ho5bwk"/><path class="v_63aev3a"/><path class="nieh-2j7u"/><path class="e9ssrfudc"/><path class="qmm4abdtb"/></g>`,
		"fallback": "fluent-emoji-flat:sun-behind-rain-cloud",
	});
}

export default Component;

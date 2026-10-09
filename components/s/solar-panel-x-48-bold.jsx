import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfzstzcwv.css';
import '../../css/o/o5ch5cb7c.css';
import '../../css/i/iw_u_sboj.css';
import '../../css/j/j34l6kblu.css';
import '../../css/o/olcsuabqv.css';
import '../../css/i/it7__hmrh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfzstzcwv"/><path class="o5ch5cb7c"/><path class="iw_u_sboj"/><path class="j34l6kblu"/><path class="olcsuabqv"/><path class="it7__hmrh"/>`,
		"fallback": "energy-icons:solar-panel-x-48-bold",
	});
}

export default Component;

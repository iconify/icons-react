import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prlak3q7y.css';
import '../../css/t/tfpo6iiuq.css';
import '../../css/k/kji158beh.css';
import '../../css/j/j9p_6kbya.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="prlak3q7y"/><path class="tfpo6iiuq"/><path class="kji158beh"/><path class="j9p_6kbya"/></g>`,
		"fallback": "icon-park-outline:solid-state-disk",
	});
}

export default Component;

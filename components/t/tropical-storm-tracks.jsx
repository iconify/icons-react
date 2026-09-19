import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nyaea9ybj.css';
import '../../css/q/q2o_hyi9e.css';
import '../../css/e/emfz5-9qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nyaea9ybj"/><circle class="q2o_hyi9e"/><path class="emfz5-9qe"/></g>`,
		"fallback": "hugeicons:tropical-storm-tracks",
	});
}

export default Component;

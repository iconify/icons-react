import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/k6ndxgekw.css';
import '../../css/h/haepy696s.css';
import '../../css/q/q25456rra.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsOs0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsOs0)"><path class="k6ndxgekw"/><path class="haepy696s"/><path class="q25456rra"/></g>`,
		"fallback": "circle-flags:os",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/er099gbue.css';
import '../../css/t/tk0_u_b9b.css';
import '../../css/t/tk1uopbko.css';
import '../../css/q/qrrk-xnqe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsKk0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsKk0)"><path class="er099gbue"/><path class="tk0_u_b9b"/><path class="tk1uopbko"/><path class="qrrk-xnqe"/></g>`,
		"fallback": "circle-flags:kk",
	});
}

export default Component;

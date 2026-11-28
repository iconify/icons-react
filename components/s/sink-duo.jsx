import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6_kdcctn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/ji5e28bhq.css';
import '../../css/t/t5xtc8odw.css';
import '../../css/z/zdl_efm0l.css';
import '../../css/q/qnmufby7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6_kdcctn secondary"/><g class="dt0cm9dhy primary"><path class="ji5e28bhq"/><path class="t5xtc8odw"/><path class="zdl_efm0l"/><path class="qnmufby7n"/></g>`,
		"fallback": "iconaut:sink-duo",
	});
}

export default Component;

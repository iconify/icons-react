import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vm9wui7_h.css';
import '../../css/t/t5_glnobk.css';
import '../../css/c/c-0urdbth.css';
import '../../css/p/pausm5bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vm9wui7_h"/><path class="t5_glnobk wm-a"/><path class="c-0urdbth wm-k"/><path class="pausm5bgw wm-a"/></g>`,
		"fallback": "withicons:lock-sketch",
	});
}

export default Component;

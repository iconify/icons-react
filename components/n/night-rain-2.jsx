import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bokm_l4hs.css';
import '../../css/n/n4cd77bbe.css';
import '../../css/n/n11eljbfr.css';
import '../../css/m/mg6580roj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bokm_l4hs"/><path class="n4cd77bbe"/><path class="n11eljbfr"/><path class="mg6580roj"/></g>`,
		"fallback": "streamline-cyber-color:night-rain-2",
	});
}

export default Component;

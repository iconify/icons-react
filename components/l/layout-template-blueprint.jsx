import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vpvtycafa.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/q/qn8vmzhwm.css';
import '../../css/f/frcn26bwv.css';
import '../../css/k/k4v78ybpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vpvtycafa wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="qn8vmzhwm wm-k"/><path class="frcn26bwv wm-a"/><path class="k4v78ybpm wm-a"/></g>`,
		"fallback": "withicons:layout-template-blueprint",
	});
}

export default Component;

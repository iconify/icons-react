import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3s7sib4m.css';
import '../../css/s/syu0m2b9g.css';
import '../../css/a/ah45v-4dv.css';
import '../../css/r/rbhdliyjf.css';
import '../../css/t/tx3apu-8n.css';
import '../../css/x/x14wgya5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i3s7sib4m wm-k"/><path class="syu0m2b9g wm-a"/><path class="ah45v-4dv wm-deco"/><path class="rbhdliyjf wm-k"/><path class="tx3apu-8n wm-a"/><path class="wm-shadow x14wgya5k"/></g>`,
		"fallback": "withicons-valentine:plug",
	});
}

export default Component;

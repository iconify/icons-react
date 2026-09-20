import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zzb-8ov-o.css';
import '../../css/v/vonc973_t.css';
import '../../css/w/wdgwbabkc.css';
import '../../css/n/nv1_vabel.css';
import '../../css/l/lfehfnbmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zzb-8ov-o"/><path class="vonc973_t"/><path class="wdgwbabkc"/><path class="nv1_vabel"/><path class="lfehfnbmy"/></g>`,
		"fallback": "streamline-cyber-color:presentation-counter-2",
	});
}

export default Component;

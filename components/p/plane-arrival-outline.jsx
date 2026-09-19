import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vtrrodxke.css';
import '../../css/n/nya780brt.css';
import '../../css/k/kdlbhi_wo.css';
import '../../css/q/qska6tbiv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vtrrodxke"/><path clip-rule="evenodd" class="nya780brt"/><path class="kdlbhi_wo"/><path clip-rule="evenodd" class="qska6tbiv"/></g>`,
		"fallback": "glyphs:plane-arrival-outline",
	});
}

export default Component;

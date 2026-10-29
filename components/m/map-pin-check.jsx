import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hed017b-p.css';
import '../../css/i/ips52oqxj.css';
import '../../css/z/z2y94ybop.css';
import '../../css/q/qpw4wpbec.css';
import '../../css/s/s77ozzd2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hed017b-p wm-k"/><path class="ips52oqxj wm-k"/><path class="wm-k z2y94ybop"/><path class="qpw4wpbec wm-shine"/><path class="s77ozzd2d wm-a"/></g>`,
		"fallback": "withicons-anime:map-pin-check",
	});
}

export default Component;

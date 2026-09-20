import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_6s4abmo.css';
import '../../css/e/ebpsr_x9i.css';
import '../../css/h/hg1kllbxc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x_6s4abmo"/><path class="ebpsr_x9i"/><path class="hg1kllbxc"/></g>`,
		"fallback": "streamline-color:megaphone-2",
	});
}

export default Component;

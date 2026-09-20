import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdnvzw9yj.css';
import '../../css/s/s6cdlmnva.css';
import '../../css/s/sdws7lb5k.css';
import '../../css/l/l_qp3r1ka.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cdnvzw9yj"/><path class="s6cdlmnva"/><path clip-rule="evenodd" class="sdws7lb5k"/><path clip-rule="evenodd" class="l_qp3r1ka"/></g>`,
		"fallback": "streamline-flex-color:threat-monitor-flat",
	});
}

export default Component;

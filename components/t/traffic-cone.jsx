import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2endmbwd.css';
import '../../css/m/mahiazbmf.css';
import '../../css/q/qp32xmm2q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g2endmbwd"/><path class="mahiazbmf"/><path class="qp32xmm2q"/></g>`,
		"fallback": "streamline-color:traffic-cone",
	});
}

export default Component;

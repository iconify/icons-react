import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqkdmiazj.css';
import '../../css/m/mhvtkdbqq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lqkdmiazj"/><path class="mhvtkdbqq"/></g>`,
		"fallback": "streamline-color:phone",
	});
}

export default Component;

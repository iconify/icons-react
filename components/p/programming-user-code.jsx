import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2s4yfb3i.css';
import '../../css/j/jhwqi--vq.css';
import '../../css/z/z68o2wbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g2s4yfb3i"/><path class="jhwqi--vq"/><path class="z68o2wbib"/></g>`,
		"fallback": "streamline-freehand-color:programming-user-code",
	});
}

export default Component;

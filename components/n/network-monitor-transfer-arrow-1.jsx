import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m01ctjbzw.css';
import '../../css/s/s0r2zwbma.css';
import '../../css/f/fu46eccto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m01ctjbzw"/><path class="s0r2zwbma"/><path class="fu46eccto"/></g>`,
		"fallback": "streamline-freehand-color:network-monitor-transfer-arrow-1",
	});
}

export default Component;

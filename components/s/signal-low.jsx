import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s0ga15b6i.css';
import '../../css/t/tqoj65byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s0ga15b6i"/><path class="tqoj65byg"/></g>`,
		"fallback": "streamline-freehand-color:signal-low",
	});
}

export default Component;

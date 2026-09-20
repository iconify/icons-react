import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_jqgob4j.css';
import '../../css/p/ps5hxpumy.css';
import '../../css/t/t71ss4emm.css';
import '../../css/l/ly65xvbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_jqgob4j"/><path class="ps5hxpumy"/><path class="t71ss4emm"/><path class="ly65xvbyx"/></g>`,
		"fallback": "streamline-freehand-color:radio-antenna-handle",
	});
}

export default Component;

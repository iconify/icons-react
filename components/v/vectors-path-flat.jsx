import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qf_kb0bbs.css';
import '../../css/a/a4gmabcpu.css';
import '../../css/m/mzxbdgbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qf_kb0bbs"/><path class="a4gmabcpu"/><path class="mzxbdgbpf"/></g>`,
		"fallback": "streamline-freehand-color:vectors-path-flat",
	});
}

export default Component;

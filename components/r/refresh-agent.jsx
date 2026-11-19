import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivb8ahbit.css';
import '../../css/k/klwjdcbgj.css';
import '../../css/i/i6kv55bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ivb8ahbit"/><path class="klwjdcbgj"/><path class="i6kv55bpu"/></g>`,
		"fallback": "andrsrxn:refresh-agent",
	});
}

export default Component;

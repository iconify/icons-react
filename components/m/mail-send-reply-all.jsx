import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/o/ocl2j5bxo.css';
import '../../css/t/tu4szacyi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="ocl2j5bxo"/><path class="tu4szacyi"/></g>`,
		"fallback": "streamline-color:mail-send-reply-all",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mluq4equa.css';
import '../../css/z/zx_6j6b3b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="mluq4equa"/><path class="zx_6j6b3b"/></g>`,
		"fallback": "icon-park-outline:voicemail",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/ozerjco_v.css';
import '../../css/t/ttgkmqbrw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ozerjco_v"/><path class="ttgkmqbrw"/></g>`,
		"fallback": "streamline-plump:user-sticker-square",
	});
}

export default Component;

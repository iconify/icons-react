import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/loipxvdgf.css';
import '../../css/k/kq4tcz4uq.css';
import '../../css/a/a2vcayo6d.css';
import '../../css/p/p8fr9gcbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="loipxvdgf"/><path class="kq4tcz4uq"/><path class="a2vcayo6d"/><path class="p8fr9gcbf"/></g>`,
		"fallback": "matita:receipt",
	});
}

export default Component;

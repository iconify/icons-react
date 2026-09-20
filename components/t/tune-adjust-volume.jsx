import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xjjhhf_0z.css';
import '../../css/b/bj5u4w47y.css';
import '../../css/t/tbbe0ybdv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xjjhhf_0z"/><path class="bj5u4w47y"/><path class="tbbe0ybdv"/></g>`,
		"fallback": "streamline-flex-color:tune-adjust-volume",
	});
}

export default Component;

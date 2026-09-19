import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xr1zzs9rr.css';
import '../../css/o/o6uacjb4y.css';
import '../../css/t/tq95vqpgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="xr1zzs9rr"/><path class="o6uacjb4y"/><path class="tq95vqpgz"/></g>`,
		"fallback": "iconamoon:upside-down-face-thin",
	});
}

export default Component;

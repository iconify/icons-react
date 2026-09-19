import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mr_9sbbpq.css';
import '../../css/z/z7dh5acxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mr_9sbbpq"/><path class="z7dh5acxx"/></g>`,
		"fallback": "hugeicons:mail-minus-02",
	});
}

export default Component;

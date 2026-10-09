import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrgo4ebxh.css';
import '../../css/s/s0l3_tbqk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrgo4ebxh"/><path class="s0l3_tbqk"/>`,
		"fallback": "energy-icons:tv-20",
	});
}

export default Component;

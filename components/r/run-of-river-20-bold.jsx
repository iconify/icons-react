import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_i3djllq.css';
import '../../css/p/p8remmbsz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_i3djllq"/><path class="p8remmbsz"/>`,
		"fallback": "energy-icons:run-of-river-20-bold",
	});
}

export default Component;

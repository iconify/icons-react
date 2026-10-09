import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiaeqebxr.css';
import '../../css/p/p8psecw5g.css';
import '../../css/e/eul6t1bqe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiaeqebxr"/><path class="p8psecw5g"/><path class="eul6t1bqe"/>`,
		"fallback": "energy-icons:shrink-20",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj49qk69z.css';
import '../../css/n/nq27wzbeg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj49qk69z"/><path class="nq27wzbeg"/>`,
		"fallback": "energy-icons:keyboard-20-bold",
	});
}

export default Component;

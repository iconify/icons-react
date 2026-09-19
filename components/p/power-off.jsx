import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1s11_vmq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1s11_vmq"/>`,
		"fallback": "fa7-solid:power-off",
	});
}

export default Component;

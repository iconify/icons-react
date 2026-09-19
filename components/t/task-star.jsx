import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwwxpfbew.css';
import '../../css/q/q352u0pff.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwwxpfbew"/><path class="q352u0pff"/>`,
		"fallback": "carbon:task-star",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuln7pb0p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuln7pb0p"/>`,
		"fallback": "carbon:quantum-qpu",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juilb0dgt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juilb0dgt"/>`,
		"fallback": "file-icons:qiskit",
	});
}

export default Component;

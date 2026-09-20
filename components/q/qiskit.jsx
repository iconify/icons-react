import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scjrk4bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scjrk4bxu"/>`,
		"fallback": "thesvg:qiskit",
	});
}

export default Component;

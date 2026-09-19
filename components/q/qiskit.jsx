import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_h5hipaa.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_h5hipaa"/>`,
		"fallback": "devicon:qiskit",
	});
}

export default Component;

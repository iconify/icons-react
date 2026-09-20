import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn29kgakn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn29kgakn"/>`,
		"fallback": "thesvg-color:qiskit",
	});
}

export default Component;

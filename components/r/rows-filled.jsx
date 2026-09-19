import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke_bx8-uq.css';
import '../../css/m/mqx34y6qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ke_bx8-uq"/><rect class="mqx34y6qf"/>`,
		"fallback": "boxicons:rows-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qluhj6bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qluhj6bgp"/>`,
		"fallback": "healthicons:nose-outline-24px",
	});
}

export default Component;

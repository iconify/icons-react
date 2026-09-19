import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwpj8qbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwpj8qbfr"/>`,
		"fallback": "boxicons:mobile-ring-filled",
	});
}

export default Component;

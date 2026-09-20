import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnko6r2lw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnko6r2lw"/>`,
		"fallback": "mdi:lock-smart",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp6urhb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp6urhb7h"/>`,
		"fallback": "boxicons:petrol-pump-filled",
	});
}

export default Component;

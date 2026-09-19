import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mibn7eb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="mibn7eb6a"/>`,
		"fallback": "boxicons:stop-filled",
	});
}

export default Component;

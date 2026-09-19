import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlo8iz2zo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlo8iz2zo"/>`,
		"fallback": "boxicons:umbrella-alt-filled",
	});
}

export default Component;

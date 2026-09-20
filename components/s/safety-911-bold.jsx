import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp4irbc5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp4irbc5p"/>`,
		"fallback": "streamline-ultimate:safety-911-bold",
	});
}

export default Component;

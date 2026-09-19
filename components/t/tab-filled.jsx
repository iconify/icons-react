import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj8xb4akc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj8xb4akc"/>`,
		"fallback": "boxicons:tab-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2nz1si5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h2nz1si5y"/>`,
		"fallback": "healthicons:video-outline-24px",
	});
}

export default Component;

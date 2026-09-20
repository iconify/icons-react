import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrv9ke-ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qrv9ke-ph"/>`,
		"fallback": "streamline-sharp:presentation-solid",
	});
}

export default Component;

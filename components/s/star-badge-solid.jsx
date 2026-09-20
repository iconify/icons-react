import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8xv4ht1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p8xv4ht1h"/>`,
		"fallback": "streamline-sharp:star-badge-solid",
	});
}

export default Component;

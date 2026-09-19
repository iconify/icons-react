import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g87f5fb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g87f5fb2p"/>`,
		"fallback": "boxicons:skip-next-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk-3x8b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk-3x8b5s"/>`,
		"fallback": "boxicons:slice-filled",
	});
}

export default Component;

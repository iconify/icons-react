import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3rv6zb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3rv6zb_w"/>`,
		"fallback": "boxicons:stadium-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0ac-ybds.css';
import '../../css/b/b6dzwabah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0ac-ybds"/><path class="b6dzwabah"/>`,
		"fallback": "boxicons:sidebar-right-filled",
	});
}

export default Component;

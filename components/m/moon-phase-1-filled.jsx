import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgb78bb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgb78bb6o"/>`,
		"fallback": "boxicons:moon-phase-1-filled",
	});
}

export default Component;

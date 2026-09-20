import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzob7687m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzob7687m"/>`,
		"fallback": "streamline-ultimate:unprotect",
	});
}

export default Component;

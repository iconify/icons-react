import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly-8_lh2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ly-8_lh2q"/>`,
		"fallback": "streamline-logos:renren-logo-1-block",
	});
}

export default Component;

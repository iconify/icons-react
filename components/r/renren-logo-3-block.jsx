import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnhjn-b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dnhjn-b9v"/>`,
		"fallback": "streamline-logos:renren-logo-3-block",
	});
}

export default Component;

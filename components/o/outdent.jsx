import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk4hdmknz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk4hdmknz"/>`,
		"fallback": "sidekickicons:outdent",
	});
}

export default Component;

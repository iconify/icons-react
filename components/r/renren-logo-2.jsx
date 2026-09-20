import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygvme9b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygvme9b5f"/>`,
		"fallback": "streamline-logos:renren-logo-2",
	});
}

export default Component;

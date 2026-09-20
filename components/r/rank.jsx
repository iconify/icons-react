import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzo0wjp8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzo0wjp8x"/>`,
		"fallback": "mdi:rank",
	});
}

export default Component;

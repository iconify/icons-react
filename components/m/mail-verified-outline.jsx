import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoy593b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoy593b6f"/>`,
		"fallback": "mdi:mail-verified-outline",
	});
}

export default Component;

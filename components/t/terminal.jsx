import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhvz2l3_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhvz2l3_p"/>`,
		"fallback": "mdi:terminal",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls1_ug9iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls1_ug9iw"/>`,
		"fallback": "mdi:reply-circle",
	});
}

export default Component;

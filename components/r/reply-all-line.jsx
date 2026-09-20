import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi51nac0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi51nac0h"/>`,
		"fallback": "ri:reply-all-line",
	});
}

export default Component;

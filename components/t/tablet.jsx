import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_348jb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_348jb8o"/>`,
		"fallback": "mdi:tablet",
	});
}

export default Component;

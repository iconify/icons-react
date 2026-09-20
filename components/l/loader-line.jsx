import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czo4g_e8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czo4g_e8j"/>`,
		"fallback": "ri:loader-line",
	});
}

export default Component;

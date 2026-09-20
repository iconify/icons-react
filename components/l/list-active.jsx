import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlp8g_b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlp8g_b9s"/>`,
		"fallback": "nrk:list-active",
	});
}

export default Component;

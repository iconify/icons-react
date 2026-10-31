import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we8g2n_pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we8g2n_pm"/>`,
		"fallback": "coolicons:snail-fill-round",
	});
}

export default Component;

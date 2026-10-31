import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkt1qo2tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkt1qo2tk"/>`,
		"fallback": "coolicons:leaf-alt-fill-round",
	});
}

export default Component;

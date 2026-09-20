import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdk5irq0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kdk5irq0j"/>`,
		"fallback": "solar:square-alt-arrow-up-outline",
	});
}

export default Component;

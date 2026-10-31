import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw2qafb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw2qafb1b"/>`,
		"fallback": "coolicons:skip-back-fill-round",
	});
}

export default Component;

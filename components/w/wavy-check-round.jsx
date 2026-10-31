import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grxn4ab8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grxn4ab8m"/>`,
		"fallback": "coolicons:wavy-check-round",
	});
}

export default Component;

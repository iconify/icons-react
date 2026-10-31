import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed-kn0bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed-kn0bym"/>`,
		"fallback": "coolicons:shield-minus-fill-round",
	});
}

export default Component;

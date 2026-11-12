import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w65xx7ela.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w65xx7ela"/>`,
		"fallback": "devicon-plain:opentofu-wordmark",
	});
}

export default Component;

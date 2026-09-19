import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0k8d5yut.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0k8d5yut"/>`,
		"fallback": "devicon-plain:jwt-wordmark",
	});
}

export default Component;

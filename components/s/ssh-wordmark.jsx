import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz5go1bgr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz5go1bgr"/>`,
		"fallback": "devicon:ssh-wordmark",
	});
}

export default Component;

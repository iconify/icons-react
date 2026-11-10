import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0pri_qum.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0pri_qum"/>`,
		"fallback": "devicon:stackit-wordmark",
	});
}

export default Component;

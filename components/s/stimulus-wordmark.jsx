import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhvr9ygna.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhvr9ygna"/>`,
		"fallback": "devicon-plain:stimulus-wordmark",
	});
}

export default Component;

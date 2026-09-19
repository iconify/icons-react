import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7xv-rpmo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7xv-rpmo"/>`,
		"fallback": "devicon-plain:polygon-wordmark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqcv97bsg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqcv97bsg"/>`,
		"fallback": "devicon:railway-wordmark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_essfbjd.css';
import '../../css/k/k-tauyblt.css';
import '../../css/v/v4fjrsq2c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_essfbjd"/><path class="k-tauyblt"/><path class="v4fjrsq2c"/>`,
		"fallback": "devicon:scalingo-wordmark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl3uy_3rm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl3uy_3rm"/>`,
		"fallback": "devicon:shotgrid-wordmark",
	});
}

export default Component;

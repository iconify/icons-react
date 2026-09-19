import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stwt57bkp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stwt57bkp"/>`,
		"fallback": "devicon-plain:k3s-wordmark",
	});
}

export default Component;

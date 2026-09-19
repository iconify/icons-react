import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cju0fnb9m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cju0fnb9m"/>`,
		"fallback": "devicon:scaleway-wordmark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urnq0wzqp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urnq0wzqp"/>`,
		"fallback": "devicon-plain:traefikproxy-wordmark",
	});
}

export default Component;

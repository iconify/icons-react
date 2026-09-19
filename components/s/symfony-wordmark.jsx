import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnlpitc9y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnlpitc9y"/>`,
		"fallback": "devicon:symfony-wordmark",
	});
}

export default Component;

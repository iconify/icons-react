import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6fxsjc6n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6fxsjc6n"/>`,
		"fallback": "devicon:laminas-wordmark",
	});
}

export default Component;

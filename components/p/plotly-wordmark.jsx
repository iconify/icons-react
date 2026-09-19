import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cif8afbhr.css';
import '../../css/y/y9fgjabwe.css';
import '../../css/z/zer1teyxa.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cif8afbhr"/><path class="y9fgjabwe"/><path class="zer1teyxa"/>`,
		"fallback": "devicon:plotly-wordmark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efnp5n2eo.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efnp5n2eo"/>`,
		"fallback": "f7:shift",
	});
}

export default Component;

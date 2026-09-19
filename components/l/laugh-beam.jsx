import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk4jnibns.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk4jnibns"/>`,
		"fallback": "fa-regular:laugh-beam",
	});
}

export default Component;

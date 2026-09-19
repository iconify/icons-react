import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6zf4mfqx.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6zf4mfqx"/>`,
		"fallback": "fa-brands:python",
	});
}

export default Component;

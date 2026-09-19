import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm_k9ga6r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm_k9ga6r"/>`,
		"fallback": "cryptocurrency:pgt",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvejr9afn.css';
import '../../css/g/g7jnq5bsb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvejr9afn"/><path class="g7jnq5bsb"/>`,
		"fallback": "devicon:semanticui",
	});
}

export default Component;

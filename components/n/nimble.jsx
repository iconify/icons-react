import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5y0id6qu.css';
import '../../css/p/pyhgc0wha.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5y0id6qu"/><path class="pyhgc0wha"/>`,
		"fallback": "devicon-plain:nimble",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7k8fqbml.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7k8fqbml"/>`,
		"fallback": "system-uicons:link-horizontal",
	});
}

export default Component;

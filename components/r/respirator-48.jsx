import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1w3r8bvp.css';
import '../../css/j/je2jee5cl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1w3r8bvp"/><path class="je2jee5cl"/>`,
		"fallback": "energy-icons:respirator-48",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5pljbc4p.css';
import '../../css/s/s5hz1qbpm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5pljbc4p"/><path class="s5hz1qbpm"/>`,
		"fallback": "energy-icons:torch-20",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrtrqjb9p.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrtrqjb9p"/>`,
		"fallback": "fa6-solid:user-shield",
	});
}

export default Component;

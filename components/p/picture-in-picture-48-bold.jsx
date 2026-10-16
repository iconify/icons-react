import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaet4wb5s.css';
import '../../css/z/z43empbta.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaet4wb5s"/><path class="z43empbta"/>`,
		"fallback": "energy-icons:picture-in-picture-48-bold",
	});
}

export default Component;

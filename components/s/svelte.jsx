import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s61fxyb8s.css';
import '../../css/t/tyum8jbog.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s61fxyb8s"/><path class="tyum8jbog"/>`,
		"fallback": "devicon:svelte",
	});
}

export default Component;

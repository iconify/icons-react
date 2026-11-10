import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe--k8x1h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe--k8x1h"/>`,
		"fallback": "devicon-plain:stackit",
	});
}

export default Component;

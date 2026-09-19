import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d66--gnqm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d66--gnqm"/>`,
		"fallback": "devicon-plain:jupyter",
	});
}

export default Component;

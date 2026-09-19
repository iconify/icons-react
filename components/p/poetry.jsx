import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f63gk40af.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f63gk40af"/>`,
		"fallback": "devicon-plain:poetry",
	});
}

export default Component;

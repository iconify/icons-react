import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac8s-6m3i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac8s-6m3i"/>`,
		"fallback": "devicon-plain:reactrouter",
	});
}

export default Component;

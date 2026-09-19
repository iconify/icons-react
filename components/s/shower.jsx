import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt1ux1bum.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt1ux1bum"/>`,
		"fallback": "fa-solid:shower",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m90omkbmi.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m90omkbmi"/>`,
		"fallback": "fa-solid:lambda",
	});
}

export default Component;

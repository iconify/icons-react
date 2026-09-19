import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8sujbo6e.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8sujbo6e"/>`,
		"fallback": "fa6-solid:mobile",
	});
}

export default Component;

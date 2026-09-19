import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7hzi319x.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7hzi319x"/>`,
		"fallback": "fa-solid:tags",
	});
}

export default Component;

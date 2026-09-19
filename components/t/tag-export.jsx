import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k87mgcena.css';
import '../../css/h/hwg0k-kmb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k87mgcena"/><path class="hwg0k-kmb"/>`,
		"fallback": "carbon:tag-export",
	});
}

export default Component;

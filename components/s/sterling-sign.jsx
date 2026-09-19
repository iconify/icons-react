import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbdt-wt6n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbdt-wt6n"/>`,
		"fallback": "fa7-solid:sterling-sign",
	});
}

export default Component;

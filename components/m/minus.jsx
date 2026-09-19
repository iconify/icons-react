import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0bashbis.css';

const viewBox = {"width":1408,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0bashbis"/>`,
		"fallback": "fa:minus",
	});
}

export default Component;

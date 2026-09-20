import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/me49012ky.css';
import '../../css/l/ltqb1vbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="me49012ky"/><path class="ltqb1vbgz"/></g>`,
		"fallback": "lucide:milk-off",
	});
}

export default Component;

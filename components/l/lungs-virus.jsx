import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz5d-qbnw.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz5d-qbnw"/>`,
		"fallback": "fa-solid:lungs-virus",
	});
}

export default Component;

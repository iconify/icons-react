import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m97tmg2wz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m97tmg2wz"/>`,
		"fallback": "fa7-solid:person-falling",
	});
}

export default Component;

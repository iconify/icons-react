import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy69faciz.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy69faciz"/>`,
		"fallback": "fa-solid:wave-square",
	});
}

export default Component;

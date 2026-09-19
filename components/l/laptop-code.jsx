import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exrtiebbu.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exrtiebbu"/>`,
		"fallback": "fa-solid:laptop-code",
	});
}

export default Component;

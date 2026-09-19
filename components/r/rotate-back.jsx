import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy-rstigo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy-rstigo"/>`,
		"fallback": "fa7-solid:rotate-back",
	});
}

export default Component;

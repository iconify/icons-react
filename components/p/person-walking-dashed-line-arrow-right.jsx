import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etdkoebcr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etdkoebcr"/>`,
		"fallback": "fa7-solid:person-walking-dashed-line-arrow-right",
	});
}

export default Component;

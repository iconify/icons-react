import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thk5s-brr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thk5s-brr"/>`,
		"fallback": "cib:spacex",
	});
}

export default Component;

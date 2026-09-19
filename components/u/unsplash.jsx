import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw6pplx8t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw6pplx8t"/>`,
		"fallback": "cib:unsplash",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6-exhbik.css';

const viewBox = {"width":475,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6-exhbik"/>`,
		"fallback": "ls:right",
	});
}

export default Component;

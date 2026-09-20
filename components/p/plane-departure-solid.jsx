import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn51s86hr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn51s86hr"/>`,
		"fallback": "la:plane-departure-solid",
	});
}

export default Component;

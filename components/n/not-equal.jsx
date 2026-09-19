import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2aou47wr.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2aou47wr"/>`,
		"fallback": "fa-solid:not-equal",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi0g28_vu.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi0g28_vu"/>`,
		"fallback": "fa-solid:long-arrow-alt-left",
	});
}

export default Component;

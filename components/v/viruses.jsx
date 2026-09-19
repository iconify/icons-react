import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v63_47ots.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v63_47ots"/>`,
		"fallback": "fa6-solid:viruses",
	});
}

export default Component;

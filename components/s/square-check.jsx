import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu_-_ib9i.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu_-_ib9i"/>`,
		"fallback": "fa6-regular:square-check",
	});
}

export default Component;

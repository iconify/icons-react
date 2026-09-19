import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjdmveb0h.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjdmveb0h"/>`,
		"fallback": "fa-solid:unlock-alt",
	});
}

export default Component;

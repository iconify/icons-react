import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wruaatbpy.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wruaatbpy"/>`,
		"fallback": "fa-solid:plane-slash",
	});
}

export default Component;

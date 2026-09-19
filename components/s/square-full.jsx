import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfggz2bbq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfggz2bbq"/>`,
		"fallback": "fa-solid:square-full",
	});
}

export default Component;

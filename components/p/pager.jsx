import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl3q62b8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl3q62b8z"/>`,
		"fallback": "fa-solid:pager",
	});
}

export default Component;

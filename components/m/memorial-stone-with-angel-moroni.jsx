import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo7o1fc6o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo7o1fc6o"/>`,
		"fallback": "pinhead:memorial-stone-with-angel-moroni",
	});
}

export default Component;

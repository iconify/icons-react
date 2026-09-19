import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr19c78yd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr19c78yd"/>`,
		"fallback": "fa7-solid:rupiah-sign",
	});
}

export default Component;

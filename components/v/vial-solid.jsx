import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_xux5b4r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_xux5b4r"/>`,
		"fallback": "la:vial-solid",
	});
}

export default Component;

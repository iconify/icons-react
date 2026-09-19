import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_l1bzkkr.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_l1bzkkr"/>`,
		"fallback": "el:person",
	});
}

export default Component;

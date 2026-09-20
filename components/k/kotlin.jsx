import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9di_s0jr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9di_s0jr"/>`,
		"fallback": "picon:kotlin",
	});
}

export default Component;

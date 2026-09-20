import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cukjm2ikv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cukjm2ikv"/>`,
		"fallback": "radix-icons:letter-case-capitalize",
	});
}

export default Component;

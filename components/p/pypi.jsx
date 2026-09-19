import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xutkmd60u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xutkmd60u"/>`,
		"fallback": "devicon-plain:pypi",
	});
}

export default Component;

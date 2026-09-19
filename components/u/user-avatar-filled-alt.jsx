import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sulruw6qc.css';
import '../../css/g/glr1ycbdr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sulruw6qc"/><path class="glr1ycbdr"/>`,
		"fallback": "carbon:user-avatar-filled-alt",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw3djeb7s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw3djeb7s"/>`,
		"fallback": "temaki:military",
	});
}

export default Component;

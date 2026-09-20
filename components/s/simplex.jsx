import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjl893inq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjl893inq"/>`,
		"fallback": "simple-icons:simplex",
	});
}

export default Component;

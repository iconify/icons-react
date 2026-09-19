import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx4_4o47q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx4_4o47q"/>`,
		"fallback": "famicons:pause-circle-sharp",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4d9xybyc.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4d9xybyc"/>`,
		"fallback": "fa6-solid:user-astronaut",
	});
}

export default Component;

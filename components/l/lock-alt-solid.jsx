import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5_1xv7xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5_1xv7xi"/>`,
		"fallback": "pixel:lock-alt-solid",
	});
}

export default Component;

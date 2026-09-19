import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz2q2c5nh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz2q2c5nh"/>`,
		"fallback": "carbon:user-simulation",
	});
}

export default Component;

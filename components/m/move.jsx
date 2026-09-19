import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrks_obiv.css';

const viewBox = {"width":718,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrks_obiv"/>`,
		"fallback": "ls:move",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my7a5ub9m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="my7a5ub9m"/>`,
		"fallback": "qlementine-icons:stereo-16",
	});
}

export default Component;

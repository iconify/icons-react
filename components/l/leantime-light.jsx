import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy7q-6bfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy7q-6bfw"/>`,
		"fallback": "selfhst:leantime-light",
	});
}

export default Component;

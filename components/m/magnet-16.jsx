import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyvy4ik0m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kyvy4ik0m"/>`,
		"fallback": "qlementine-icons:magnet-16",
	});
}

export default Component;

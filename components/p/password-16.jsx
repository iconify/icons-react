import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtr2w7blj.css';
import '../../css/q/qvhmvvbnn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtr2w7blj"/><path clip-rule="evenodd" class="qvhmvvbnn"/>`,
		"fallback": "qlementine-icons:password-16",
	});
}

export default Component;

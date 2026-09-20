import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxjh9tbuw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxjh9tbuw"/>`,
		"fallback": "ix:remove-eye-filled",
	});
}

export default Component;

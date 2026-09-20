import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi1s_1bil.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi1s_1bil"/>`,
		"fallback": "ix:signal-strength-7",
	});
}

export default Component;

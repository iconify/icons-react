import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx0053x8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx0053x8v"/>`,
		"fallback": "tdesign:uncomfortable-1-filled",
	});
}

export default Component;

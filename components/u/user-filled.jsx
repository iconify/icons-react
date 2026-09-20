import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xes168uiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xes168uiq"/>`,
		"fallback": "tdesign:user-filled",
	});
}

export default Component;

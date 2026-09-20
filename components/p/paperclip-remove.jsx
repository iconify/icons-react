import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcyhfwb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcyhfwb9h"/>`,
		"fallback": "mdi:paperclip-remove",
	});
}

export default Component;

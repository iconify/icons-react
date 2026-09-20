import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x38gzbbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x38gzbbcm"/>`,
		"fallback": "tdesign:minus-rectangle-filled",
	});
}

export default Component;

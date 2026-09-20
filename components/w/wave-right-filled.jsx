import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnk4x_bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnk4x_bab"/>`,
		"fallback": "tdesign:wave-right-filled",
	});
}

export default Component;

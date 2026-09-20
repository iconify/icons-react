import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs2mikx-j.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs2mikx-j"/>`,
		"fallback": "tdesign:mode-dark-filled",
	});
}

export default Component;

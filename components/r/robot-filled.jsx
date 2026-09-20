import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e54p_3stm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e54p_3stm"/>`,
		"fallback": "tdesign:robot-filled",
	});
}

export default Component;

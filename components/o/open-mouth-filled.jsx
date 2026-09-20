import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/typ9t6dud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="typ9t6dud"/>`,
		"fallback": "tdesign:open-mouth-filled",
	});
}

export default Component;

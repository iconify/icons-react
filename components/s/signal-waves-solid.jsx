import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thqiy6l0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thqiy6l0b"/>`,
		"fallback": "mynaui:signal-waves-solid",
	});
}

export default Component;

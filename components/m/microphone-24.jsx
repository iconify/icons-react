import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjas6y7nm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mjas6y7nm"/>`,
		"fallback": "qlementine-icons:microphone-24",
	});
}

export default Component;

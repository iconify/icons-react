import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni_m1ubni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ni_m1ubni"/>`,
		"fallback": "streamline-sharp:school-bus-side-remix",
	});
}

export default Component;

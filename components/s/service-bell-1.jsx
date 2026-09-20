import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frvq3h_2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="frvq3h_2s"/>`,
		"fallback": "lineicons:service-bell-1",
	});
}

export default Component;

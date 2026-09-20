import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt4rnojpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mt4rnojpa"/>`,
		"fallback": "streamline-sharp:shinto-remix",
	});
}

export default Component;

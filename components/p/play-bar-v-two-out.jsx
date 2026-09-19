import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcr7icbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcr7icbza"/>`,
		"fallback": "cbi:play-bar-v-two-out",
	});
}

export default Component;

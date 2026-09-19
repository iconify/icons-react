import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8fv5cbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8fv5cbya"/>`,
		"fallback": "cbi:play-bar-v-alt",
	});
}

export default Component;

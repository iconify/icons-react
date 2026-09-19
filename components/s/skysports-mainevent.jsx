import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbu0xac7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbu0xac7w"/>`,
		"fallback": "cbi:skysports-mainevent",
	});
}

export default Component;

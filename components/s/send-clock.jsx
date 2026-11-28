import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9_4sgipx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9_4sgipx"/>`,
		"fallback": "noviair:send-clock",
	});
}

export default Component;

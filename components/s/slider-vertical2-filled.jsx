import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xja7l4brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xja7l4brt"/>`,
		"fallback": "reicon:slider-vertical2-filled",
	});
}

export default Component;

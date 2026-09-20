import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmekz27sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmekz27sx"/>`,
		"fallback": "thesvg-color:rubymine",
	});
}

export default Component;

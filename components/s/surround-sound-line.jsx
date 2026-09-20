import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmen-absx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmen-absx"/>`,
		"fallback": "ri:surround-sound-line",
	});
}

export default Component;

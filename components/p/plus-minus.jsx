import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7r11o9ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7r11o9ok"/>`,
		"fallback": "noviair:plus-minus",
	});
}

export default Component;

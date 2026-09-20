import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rufm80bum.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rufm80bum"/>`,
		"fallback": "streamline:interface-edit-flip-vertical-2-arrow-design-flip-reflect-up-down",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fga303buv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fga303buv"/>`,
		"fallback": "streamline:interface-edit-flip-down-design-down-flip-reflect-vertical",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/silnjob3s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="silnjob3s"/>`,
		"fallback": "streamline:interface-edit-flip-vertical-1-arrow-design-flip-reflect-up-down",
	});
}

export default Component;

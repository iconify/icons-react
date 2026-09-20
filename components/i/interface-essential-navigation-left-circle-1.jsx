import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3lxiyb3s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3lxiyb3s"/>`,
		"fallback": "streamline-pixel:interface-essential-navigation-left-circle-1",
	});
}

export default Component;

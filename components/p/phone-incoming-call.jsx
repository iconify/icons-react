import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-t_xccjl.css';
import '../../css/o/o2jt7mbjg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-t_xccjl"/><path class="o2jt7mbjg"/>`,
		"fallback": "streamline-pixel:phone-incoming-call",
	});
}

export default Component;

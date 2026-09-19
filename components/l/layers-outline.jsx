import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-1tko0hh.css';
import '../../css/i/itcix3b7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-1tko0hh"/><path class="itcix3b7o"/>`,
		"fallback": "ion:layers-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo1736mqr.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo1736mqr"/>`,
		"fallback": "ei:paperclip",
	});
}

export default Component;

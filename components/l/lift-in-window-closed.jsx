import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc557rb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc557rb_k"/>`,
		"fallback": "cbi:lift-in-window-closed",
	});
}

export default Component;

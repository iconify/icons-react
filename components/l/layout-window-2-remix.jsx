import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arccr3b_g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="arccr3b_g"/>`,
		"fallback": "streamline:layout-window-2-remix",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm6wlrb4t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rm6wlrb4t"/>`,
		"fallback": "streamline-flex:trophy-remix",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f36scs2yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f36scs2yo"/>`,
		"fallback": "reicon:square-arrow-right-down-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl7_c774e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dl7_c774e"/>`,
		"fallback": "reicon:list-check2-filled",
	});
}

export default Component;

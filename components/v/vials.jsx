import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvr9_mbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvr9_mbbt"/>`,
		"fallback": "iconoir:vials",
	});
}

export default Component;

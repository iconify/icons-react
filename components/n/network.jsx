import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x90scwbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x90scwbmj"/>`,
		"fallback": "streamline-cyber:network",
	});
}

export default Component;

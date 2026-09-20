import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7ml_9bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g7ml_9bwl"/>`,
		"fallback": "streamline-logos:twitter-logo-2-block",
	});
}

export default Component;

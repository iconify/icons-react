import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqe1w2mmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wqe1w2mmm"/>`,
		"fallback": "streamline-sharp:text-bar-remix",
	});
}

export default Component;

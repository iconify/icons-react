import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzh21_idx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzh21_idx"/>`,
		"fallback": "streamline-cyber:piano-1",
	});
}

export default Component;

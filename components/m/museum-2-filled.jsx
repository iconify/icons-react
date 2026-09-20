import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3wndnb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3wndnb1w"/>`,
		"fallback": "tdesign:museum-2-filled",
	});
}

export default Component;

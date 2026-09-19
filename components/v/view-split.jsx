import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8d7wgb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q8d7wgb8w"/>`,
		"fallback": "gg:view-split",
	});
}

export default Component;

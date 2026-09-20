import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxyat7jji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cxyat7jji"/>`,
		"fallback": "si:toggle-off-fill",
	});
}

export default Component;

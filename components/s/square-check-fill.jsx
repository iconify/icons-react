import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbw72ybsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nbw72ybsc"/>`,
		"fallback": "keyline-icons:square-check-fill",
	});
}

export default Component;

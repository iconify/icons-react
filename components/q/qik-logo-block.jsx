import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k63r90tuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k63r90tuq"/>`,
		"fallback": "streamline-logos:qik-logo-block",
	});
}

export default Component;

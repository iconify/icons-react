import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwwgz8biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qwwgz8biv"/>`,
		"fallback": "streamline-logos:vimeo-logo-block",
	});
}

export default Component;

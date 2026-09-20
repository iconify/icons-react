import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxiq8gbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jxiq8gbgi"/>`,
		"fallback": "streamline-logos:playerfm-logo-block",
	});
}

export default Component;

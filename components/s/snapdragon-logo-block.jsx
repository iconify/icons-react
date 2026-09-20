import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l48dcybie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l48dcybie"/>`,
		"fallback": "streamline-logos:snapdragon-logo-block",
	});
}

export default Component;

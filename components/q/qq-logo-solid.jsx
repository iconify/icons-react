import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qok2vgb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qok2vgb0s"/>`,
		"fallback": "streamline-logos:qq-logo-solid",
	});
}

export default Component;

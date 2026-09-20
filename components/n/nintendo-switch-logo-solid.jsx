import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-d35mimt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l-d35mimt"/>`,
		"fallback": "streamline-logos:nintendo-switch-logo-solid",
	});
}

export default Component;

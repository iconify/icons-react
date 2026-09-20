import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj5cn645r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj5cn645r"/>`,
		"fallback": "streamline-logos:kick-logo-logo",
	});
}

export default Component;

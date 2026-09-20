import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7gb8od4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w7gb8od4i"/>`,
		"fallback": "streamline-logos:manjaro-logo-block",
	});
}

export default Component;

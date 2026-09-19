import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3o6zp8oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3o6zp8oj"/>`,
		"fallback": "cbi:nanoleaf-ropelight",
	});
}

export default Component;

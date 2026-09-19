import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxgx6xbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxgx6xbbq"/>`,
		"fallback": "guidance:praying-room",
	});
}

export default Component;

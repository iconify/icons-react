import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptle577jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptle577jt"/>`,
		"fallback": "cbi:metv",
	});
}

export default Component;

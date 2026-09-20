import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnl4as1cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnl4as1cj"/>`,
		"fallback": "thesvg:paradox-interactive",
	});
}

export default Component;

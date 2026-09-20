import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3e-jeq9d.css';
import '../../css/d/d1iq10ban.css';
import '../../css/e/epkhpfbge.css';
import '../../css/a/azga5bb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3e-jeq9d"/><path class="d1iq10ban"/><path class="epkhpfbge"/><path clip-rule="evenodd" class="azga5bb1m"/>`,
		"fallback": "token:uniswap",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwq5s_bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwq5s_bsx"/>`,
		"fallback": "cbi:pool-electric-lvl",
	});
}

export default Component;

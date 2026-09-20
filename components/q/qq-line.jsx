import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u265_o_gg.css';
import '../../css/f/fwtgwcf6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u265_o_gg"/><path class="fwtgwcf6n"/>`,
		"fallback": "mingcute:qq-line",
	});
}

export default Component;

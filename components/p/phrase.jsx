import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qwc_s0btg.css';
import '../../css/q/qvlrhybtq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="qwc_s0btg"/><path class="qvlrhybtq"/></g>`,
		"fallback": "catppuccin:phrase",
	});
}

export default Component;

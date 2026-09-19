import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_pu1q0jg.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i_pu1q0jg"/>`,
		"fallback": "cuida:unfold-horizontal-outline",
	});
}

export default Component;

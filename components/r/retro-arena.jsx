import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtbji8b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtbji8b_q"/>`,
		"fallback": "cbi:retro-arena",
	});
}

export default Component;

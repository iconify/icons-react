import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_rljcbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_rljcbcl"/>`,
		"fallback": "tabler:multiplier-1x",
	});
}

export default Component;

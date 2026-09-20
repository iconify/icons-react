import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_b0q_ixb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_b0q_ixb"/>`,
		"fallback": "tabler:square-f5-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q61-t8b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q61-t8b_g"/>`,
		"fallback": "cuida:sidebar-collapse-outline",
	});
}

export default Component;

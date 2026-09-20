import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clrr77bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clrr77bhm"/>`,
		"fallback": "tabler:square-arrow-down-filled",
	});
}

export default Component;

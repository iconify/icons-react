import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryt39u2qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryt39u2qe"/>`,
		"fallback": "coolicons:save-round",
	});
}

export default Component;

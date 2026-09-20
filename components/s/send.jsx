import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jki42v96b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jki42v96b"/>`,
		"fallback": "tabler:send",
	});
}

export default Component;

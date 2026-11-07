import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp69ui1wu.css';
import '../../css/f/f63v77q_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wp69ui1wu"/><path class="f63v77q_l"/>`,
		"fallback": "solar:undo-right-bold-duotone",
	});
}

export default Component;

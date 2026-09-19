import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckkfthm9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckkfthm9t"/>`,
		"fallback": "boxicons:toilet-roll-filled",
	});
}

export default Component;

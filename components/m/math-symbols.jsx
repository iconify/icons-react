import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls27mabel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls27mabel"/>`,
		"fallback": "tabler:math-symbols",
	});
}

export default Component;

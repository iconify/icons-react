import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpti6ab8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpti6ab8q"/>`,
		"fallback": "tabler:square-rounded-chevron-left-filled",
	});
}

export default Component;

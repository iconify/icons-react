import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_i0ahlhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_i0ahlhj"/>`,
		"fallback": "tabler:player-skip-back-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya-g8j0vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya-g8j0vi"/>`,
		"fallback": "tabler:player-pause",
	});
}

export default Component;

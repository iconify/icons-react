import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyv3_ubgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyv3_ubgh"/>`,
		"fallback": "tabler:player-play-filled",
	});
}

export default Component;

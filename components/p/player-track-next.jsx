import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtgjqcbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtgjqcbtl"/>`,
		"fallback": "tabler:player-track-next",
	});
}

export default Component;

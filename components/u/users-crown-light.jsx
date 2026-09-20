import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu3wncbjp.css';
import '../../css/q/qa69btbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu3wncbjp"/><path class="qa69btbsi"/>`,
		"fallback": "stash:users-crown-light",
	});
}

export default Component;

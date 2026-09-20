import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvcj7_bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvcj7_bet"/>`,
		"fallback": "keyline-icons:music-note",
	});
}

export default Component;

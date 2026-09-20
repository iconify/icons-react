import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhjbbltrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhjbbltrb"/>`,
		"fallback": "tdesign:pearl-of-the-orient-filled",
	});
}

export default Component;

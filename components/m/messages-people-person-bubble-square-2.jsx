import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcco9vbwq.css';
import '../../css/l/l5p8g7bfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcco9vbwq"/><path class="l5p8g7bfl"/>`,
		"fallback": "streamline-freehand:messages-people-person-bubble-square-2",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svetj300y.css';
import '../../css/g/gwn0owbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svetj300y"/><path class="gwn0owbnh"/>`,
		"fallback": "boxicons:user-voice",
	});
}

export default Component;

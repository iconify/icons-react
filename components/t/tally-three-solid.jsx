import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgt-5pbmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgt-5pbmp"/>`,
		"fallback": "mynaui:tally-three-solid",
	});
}

export default Component;

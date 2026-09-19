import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhd-_sbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhd-_sbjt"/>`,
		"fallback": "boxicons:send",
	});
}

export default Component;

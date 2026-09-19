import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc2ta6dqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc2ta6dqr"/>`,
		"fallback": "guidance:remove-x-cross",
	});
}

export default Component;

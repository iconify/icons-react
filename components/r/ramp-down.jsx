import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkv516bhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkv516bhd"/>`,
		"fallback": "guidance:ramp-down",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpsqq_b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpsqq_b6d"/>`,
		"fallback": "cbi:twinly-curtian",
	});
}

export default Component;

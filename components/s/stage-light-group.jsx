import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_a1tbc-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_a1tbc-t"/>`,
		"fallback": "cbi:stage-light-group",
	});
}

export default Component;

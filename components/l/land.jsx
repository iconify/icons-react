import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2ol84b2g.css';
import '../../css/i/iwbhjtb_d.css';
import '../../css/f/f4fekj7yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2ol84b2g"/><path class="iwbhjtb_d"/><path class="f4fekj7yf"/>`,
		"fallback": "token:land",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsonpbh5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsonpbh5a"/>`,
		"fallback": "ri:screenshot-2-line",
	});
}

export default Component;

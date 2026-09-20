import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmxwfq3ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmxwfq3ey"/>`,
		"fallback": "tabler:number-46-small",
	});
}

export default Component;

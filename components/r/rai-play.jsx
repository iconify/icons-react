import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ladbwb50r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ladbwb50r"/>`,
		"fallback": "cbi:rai-play",
	});
}

export default Component;

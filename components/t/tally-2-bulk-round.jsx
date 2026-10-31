import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri96t0v6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri96t0v6a"/>`,
		"fallback": "coolicons:tally-2-bulk-round",
	});
}

export default Component;

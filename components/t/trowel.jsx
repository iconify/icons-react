import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib8c9xnsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib8c9xnsp"/>`,
		"fallback": "tabler:trowel",
	});
}

export default Component;

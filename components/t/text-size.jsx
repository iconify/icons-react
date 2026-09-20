import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2w4mlbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2w4mlbwv"/>`,
		"fallback": "tabler:text-size",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixxgqxb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixxgqxb0z"/>`,
		"fallback": "tabler:letter-x-small",
	});
}

export default Component;

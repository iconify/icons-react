import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9iu1d2qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9iu1d2qk"/>`,
		"fallback": "tabler:user-bitcoin",
	});
}

export default Component;

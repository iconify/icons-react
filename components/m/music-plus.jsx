import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trwuuv5jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trwuuv5jf"/>`,
		"fallback": "tabler:music-plus",
	});
}

export default Component;

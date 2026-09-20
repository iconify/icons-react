import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgdiet0qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgdiet0qs"/>`,
		"fallback": "tabler:square-letter-u-filled",
	});
}

export default Component;

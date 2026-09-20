import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbrp83znd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbrp83znd"/>`,
		"fallback": "tabler:sort-0-9",
	});
}

export default Component;

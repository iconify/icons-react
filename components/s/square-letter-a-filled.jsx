import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzfjd7bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzfjd7bbq"/>`,
		"fallback": "tabler:square-letter-a-filled",
	});
}

export default Component;

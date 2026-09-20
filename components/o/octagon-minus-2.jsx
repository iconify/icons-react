import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl9f0ocwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl9f0ocwu"/>`,
		"fallback": "tabler:octagon-minus-2",
	});
}

export default Component;

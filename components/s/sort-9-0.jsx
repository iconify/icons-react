import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3jobgg0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3jobgg0u"/>`,
		"fallback": "tabler:sort-9-0",
	});
}

export default Component;

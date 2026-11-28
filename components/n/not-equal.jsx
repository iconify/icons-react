import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi-5o3bzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi-5o3bzq"/>`,
		"fallback": "noviair:not-equal",
	});
}

export default Component;

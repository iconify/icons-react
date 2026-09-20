import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbp78cmjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbp78cmjp"/>`,
		"fallback": "mdi:relation-only-one-to-one-or-many",
	});
}

export default Component;

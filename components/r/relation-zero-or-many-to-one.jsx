import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6j36zt0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6j36zt0v"/>`,
		"fallback": "mdi:relation-zero-or-many-to-one",
	});
}

export default Component;

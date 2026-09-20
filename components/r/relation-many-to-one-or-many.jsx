import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7-blbuve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7-blbuve"/>`,
		"fallback": "mdi:relation-many-to-one-or-many",
	});
}

export default Component;

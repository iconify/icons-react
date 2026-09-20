import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh8z9g91n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh8z9g91n"/>`,
		"fallback": "token:qsr",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlscz0l2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlscz0l2v"/>`,
		"fallback": "typcn:video",
	});
}

export default Component;

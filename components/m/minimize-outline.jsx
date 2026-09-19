import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doex5ofaj.css';
import '../../css/o/om-12ci7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doex5ofaj"/><path class="om-12ci7u"/>`,
		"fallback": "eva:minimize-outline",
	});
}

export default Component;

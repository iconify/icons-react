import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doex5ofaj.css';
import '../../css/u/u9i5pqlkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doex5ofaj"/><path class="u9i5pqlkh"/>`,
		"fallback": "eva:maximize-outline",
	});
}

export default Component;

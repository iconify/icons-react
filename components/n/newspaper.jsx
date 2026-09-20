import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnd1vpbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnd1vpbyp"/>`,
		"fallback": "uil:newspaper",
	});
}

export default Component;

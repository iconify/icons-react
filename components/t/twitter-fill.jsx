import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gef5ck7od.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gef5ck7od"/>`,
		"fallback": "si:twitter-fill",
	});
}

export default Component;

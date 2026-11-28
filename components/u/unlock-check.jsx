import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg-3gzbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg-3gzbhe"/>`,
		"fallback": "noviair-light:unlock-check",
	});
}

export default Component;

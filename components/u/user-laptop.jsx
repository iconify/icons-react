import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lug35-z0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lug35-z0h"/>`,
		"fallback": "reicon:user-laptop",
	});
}

export default Component;

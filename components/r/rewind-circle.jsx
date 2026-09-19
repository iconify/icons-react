import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myv0d9bop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myv0d9bop"/>`,
		"fallback": "bxs:rewind-circle",
	});
}

export default Component;

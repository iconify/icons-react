import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtl--8bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtl--8bqr"/>`,
		"fallback": "token:wagmi",
	});
}

export default Component;

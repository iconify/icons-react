import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvjav9xzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvjav9xzs"/>`,
		"fallback": "token:savg",
	});
}

export default Component;

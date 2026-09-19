import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9-ymghux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9-ymghux"/>`,
		"fallback": "boxicons:signal-5",
	});
}

export default Component;

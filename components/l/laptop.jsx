import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx2181yer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx2181yer"/>`,
		"fallback": "nrk:laptop",
	});
}

export default Component;

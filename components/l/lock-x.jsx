import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqqkcsb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqqkcsb_y"/>`,
		"fallback": "noviair-light:lock-x",
	});
}

export default Component;

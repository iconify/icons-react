import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bghxr8bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bghxr8bsq"/>`,
		"fallback": "noviair-light:test-tube",
	});
}

export default Component;

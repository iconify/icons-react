import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgn2e9haf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgn2e9haf"/>`,
		"fallback": "noviair-light:plug",
	});
}

export default Component;

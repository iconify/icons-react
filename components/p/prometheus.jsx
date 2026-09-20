import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhh1p3b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhh1p3b7n"/>`,
		"fallback": "thesvg-color:prometheus",
	});
}

export default Component;

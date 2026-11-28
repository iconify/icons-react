import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmgt9yblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmgt9yblm"/>`,
		"fallback": "noviair-light:medal-star",
	});
}

export default Component;

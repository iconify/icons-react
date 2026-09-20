import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhfg48bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhfg48bxn"/>`,
		"fallback": "uis:square-full",
	});
}

export default Component;

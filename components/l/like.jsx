import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc2lzsb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc2lzsb-x"/>`,
		"fallback": "bx:like",
	});
}

export default Component;

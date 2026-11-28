import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qap4ejbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qap4ejbsm"/>`,
		"fallback": "noviair-light:table-minus",
	});
}

export default Component;

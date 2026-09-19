import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1oexxbmr.css';
import '../../css/r/r-45tw1ar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1oexxbmr"/><path class="r-45tw1ar"/>`,
		"fallback": "bx:shield-minus",
	});
}

export default Component;

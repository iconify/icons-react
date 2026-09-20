import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bscp3lbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bscp3lbwa"/>`,
		"fallback": "si:shield-health-safety-line",
	});
}

export default Component;

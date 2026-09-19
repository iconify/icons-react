import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogss53eaa.css';
import '../../css/q/qit74nb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogss53eaa"/><path class="qit74nb_r"/>`,
		"fallback": "circum:login",
	});
}

export default Component;

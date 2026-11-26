import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xru9etm2q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xru9etm2q"/>`,
		"fallback": "devicon-plain:rstan",
	});
}

export default Component;

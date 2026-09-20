import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4cv7lb_i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4cv7lb_i"/>`,
		"fallback": "picon:mr",
	});
}

export default Component;

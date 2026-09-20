import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n372nk4yh.css';
import '../../css/p/p42m-zbrr.css';
import '../../css/q/q0e_f6n9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n372nk4yh"/><path class="p42m-zbrr"/><path class="q0e_f6n9t"/>`,
		"fallback": "token:srm",
	});
}

export default Component;

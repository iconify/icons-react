import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5xt8ebyb.css';
import '../../css/y/yls_sbcyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5xt8ebyb"/><path class="yls_sbcyb"/>`,
		"fallback": "token:req",
	});
}

export default Component;

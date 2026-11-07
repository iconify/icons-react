import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn528ebyy.css';
import '../../css/i/ixa_i_r1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn528ebyy"/><path class="ixa_i_r1u"/>`,
		"fallback": "solar:square-forward-outline",
	});
}

export default Component;

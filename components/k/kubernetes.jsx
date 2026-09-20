import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb50vv9xt.css';
import '../../css/d/ds9388b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb50vv9xt"/><path class="ds9388b_o"/>`,
		"fallback": "lineicons:kubernetes",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv3ybibxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv3ybibxk"/>`,
		"fallback": "mdi:number-3-box-outline",
	});
}

export default Component;

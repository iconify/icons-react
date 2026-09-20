import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy-f4-1dv.css';
import '../../css/l/l3-5_c46r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy-f4-1dv"/><path clip-rule="evenodd" class="l3-5_c46r"/>`,
		"fallback": "token:si",
	});
}

export default Component;

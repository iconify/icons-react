import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur1u_fp9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur1u_fp9n"/>`,
		"fallback": "cbi:sliding-barndoor-open",
	});
}

export default Component;

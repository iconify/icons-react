import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj_w2xb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj_w2xb_u"/>`,
		"fallback": "lucide:square-dashed-bottom",
	});
}

export default Component;

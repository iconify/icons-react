import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqa_u_4cx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqa_u_4cx"/>`,
		"fallback": "solar:radar-broken",
	});
}

export default Component;

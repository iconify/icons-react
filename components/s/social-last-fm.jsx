import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_o0lhbnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_o0lhbnu"/>`,
		"fallback": "typcn:social-last-fm",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkkt_je4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkkt_je4p"/>`,
		"fallback": "typcn:social-github",
	});
}

export default Component;

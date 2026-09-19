import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygvaq_bgq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygvaq_bgq"/>`,
		"fallback": "dinkie-icons:seven-of-bamboos-mahjong",
	});
}

export default Component;

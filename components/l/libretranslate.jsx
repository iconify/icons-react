import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpbu6t_1y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpbu6t_1y"/>`,
		"fallback": "selfhst:libretranslate",
	});
}

export default Component;

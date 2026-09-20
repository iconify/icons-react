import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6zmhvbdg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6zmhvbdg"/>`,
		"fallback": "subway:paragraph-8",
	});
}

export default Component;

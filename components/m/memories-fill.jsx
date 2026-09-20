import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7o7g3z9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7o7g3z9r"/>`,
		"fallback": "ri:memories-fill",
	});
}

export default Component;

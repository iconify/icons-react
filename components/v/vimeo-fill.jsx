import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7n7f3ipf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7n7f3ipf"/>`,
		"fallback": "akar-icons:vimeo-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_dzqibpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_dzqibpd"/>`,
		"fallback": "uil:search-alt",
	});
}

export default Component;

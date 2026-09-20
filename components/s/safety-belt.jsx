import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-e_1xbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-e_1xbae"/>`,
		"fallback": "mdi:safety-belt",
	});
}

export default Component;

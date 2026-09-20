import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcw2n9bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcw2n9bxd"/>`,
		"fallback": "mdi:magnify-close",
	});
}

export default Component;

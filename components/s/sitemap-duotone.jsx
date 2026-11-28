import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5p742bmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary w5p742bmu"/>`,
		"fallback": "iconaut:sitemap-duotone",
	});
}

export default Component;

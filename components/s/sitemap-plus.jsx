import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk-_17g4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk-_17g4f"/>`,
		"fallback": "tabler:sitemap-plus",
	});
}

export default Component;

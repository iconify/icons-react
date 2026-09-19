import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g82h75bir.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g82h75bir"/>`,
		"fallback": "fa:sitemap",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvrx7uf1z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvrx7uf1z"/>`,
		"fallback": "bi:rss-fill",
	});
}

export default Component;

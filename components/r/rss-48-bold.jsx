import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9xxoy94z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9xxoy94z"/>`,
		"fallback": "energy-icons:rss-48-bold",
	});
}

export default Component;

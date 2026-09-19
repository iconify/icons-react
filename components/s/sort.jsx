import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akjnrbb3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akjnrbb3k"/>`,
		"fallback": "icon-park-outline:sort",
	});
}

export default Component;

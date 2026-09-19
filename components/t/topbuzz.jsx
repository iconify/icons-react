import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a03qbvbzo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a03qbvbzo"/>`,
		"fallback": "icon-park-outline:topbuzz",
	});
}

export default Component;

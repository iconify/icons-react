import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az-5w-ucj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az-5w-ucj"/>`,
		"fallback": "icon-park-outline:right-small",
	});
}

export default Component;

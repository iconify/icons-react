import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2wi0sz4j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2wi0sz4j"/>`,
		"fallback": "icon-park-outline:loading-one",
	});
}

export default Component;

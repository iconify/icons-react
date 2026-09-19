import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa--x8bqq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa--x8bqq"/>`,
		"fallback": "icon-park-outline:light",
	});
}

export default Component;

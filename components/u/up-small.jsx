import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukkq_py3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukkq_py3i"/>`,
		"fallback": "icon-park-outline:up-small",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfsiw919t.css';
import '../../css/k/kqtvm-g_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfsiw919t"/><path class="kqtvm-g_y"/>`,
		"fallback": "boxicons:shape-exclude-alt",
	});
}

export default Component;

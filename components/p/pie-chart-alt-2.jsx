import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt0u4kb6g.css';
import '../../css/z/zsooyfbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt0u4kb6g"/><path class="zsooyfbym"/>`,
		"fallback": "bxs:pie-chart-alt-2",
	});
}

export default Component;

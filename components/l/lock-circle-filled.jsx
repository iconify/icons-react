import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/icp0bh29j.css';
import '../../css/v/vmbvg6bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="icp0bh29j"/><path class="vmbvg6bdz"/></g>`,
		"fallback": "reicon:lock-circle-filled",
	});
}

export default Component;

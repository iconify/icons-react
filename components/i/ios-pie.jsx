import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdokhcczj.css';
import '../../css/o/ohy4x1bfs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdokhcczj"/><path class="ohy4x1bfs"/>`,
		"fallback": "ion:ios-pie",
	});
}

export default Component;

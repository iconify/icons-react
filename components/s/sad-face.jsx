import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/l/l5yjw9b8s.css';
import '../../css/j/jof4c9nly.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="l5yjw9b8s"/><path class="jof4c9nly"/></g>`,
		"fallback": "streamline-plump:sad-face",
	});
}

export default Component;

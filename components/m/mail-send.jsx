import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/b/b5mpx9hjg.css';
import '../../css/i/in3igcb8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="b5mpx9hjg"/><path class="in3igcb8w"/></g>`,
		"fallback": "streamline-plump:mail-send",
	});
}

export default Component;

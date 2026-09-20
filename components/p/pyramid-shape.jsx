import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/w8b12n5qt.css';
import '../../css/w/w399e3bjc.css';
import '../../css/f/f5bw1sbux.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="w8b12n5qt"/><path class="w399e3bjc"/><path class="f5bw1sbux"/></g>`,
		"fallback": "streamline-plump-color:pyramid-shape",
	});
}

export default Component;

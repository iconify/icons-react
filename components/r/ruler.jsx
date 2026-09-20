import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xbemvqt9d.css';
import '../../css/a/a0k6mzq6g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="xbemvqt9d"/><path class="a0k6mzq6g"/></g>`,
		"fallback": "streamline-plump-color:ruler",
	});
}

export default Component;

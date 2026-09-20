import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/y/y1hhc5b6u.css';
import '../../css/i/ip8pm7b3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="y1hhc5b6u"/><path class="ip8pm7b3i"/></g>`,
		"fallback": "streamline-plump:steps-1",
	});
}

export default Component;

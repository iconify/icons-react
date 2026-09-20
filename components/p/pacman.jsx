import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d7_kt5btc.css';
import '../../css/e/epac0egwa.css';
import '../../css/s/sosigtw0x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="d7_kt5btc"/><path class="epac0egwa"/><path class="sosigtw0x"/></g>`,
		"fallback": "streamline-plump-color:pacman",
	});
}

export default Component;

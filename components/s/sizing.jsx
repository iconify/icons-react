import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/s5acyd9-p.css';
import '../../css/k/kkpqd3b9r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="s5acyd9-p"/><path class="kkpqd3b9r"/></g>`,
		"fallback": "streamline-plump-color:sizing",
	});
}

export default Component;

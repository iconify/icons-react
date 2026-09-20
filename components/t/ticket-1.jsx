import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/pjbopmuxt.css';
import '../../css/r/r1hvppbvs.css';
import '../../css/x/xjdn1v73o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="pjbopmuxt"/><path class="r1hvppbvs"/><path class="xjdn1v73o"/></g>`,
		"fallback": "streamline-plump-color:ticket-1",
	});
}

export default Component;

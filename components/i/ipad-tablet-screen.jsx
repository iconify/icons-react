import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/o7kjqcb3m.css';
import '../../css/u/uu1mu9b1q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="o7kjqcb3m"/><path class="uu1mu9b1q"/></g>`,
		"fallback": "streamline-plump-color:ipad-tablet-screen",
	});
}

export default Component;

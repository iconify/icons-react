import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/plvuzbc9m.css';
import '../../css/y/yxf6qh58r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="plvuzbc9m"/><path class="yxf6qh58r"/></g>`,
		"fallback": "streamline-plump:waving-hand",
	});
}

export default Component;

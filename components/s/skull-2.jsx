import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vw8avj3to.css';
import '../../css/k/krw6hkh8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="vw8avj3to"/><path class="krw6hkh8q"/></g>`,
		"fallback": "streamline-plump:skull-2",
	});
}

export default Component;

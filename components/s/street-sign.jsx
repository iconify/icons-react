import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ybzyd-buk.css';
import '../../css/n/nclb642xq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ybzyd-buk"/><path class="nclb642xq"/></g>`,
		"fallback": "streamline-plump:street-sign",
	});
}

export default Component;

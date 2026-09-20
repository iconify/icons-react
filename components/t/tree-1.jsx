import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wha7zu9wn.css';
import '../../css/f/fsn04zh9o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="wha7zu9wn"/><path class="fsn04zh9o"/></g>`,
		"fallback": "streamline-plump:tree-1",
	});
}

export default Component;

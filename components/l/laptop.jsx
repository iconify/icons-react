import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/oc0dpze7y.css';
import '../../css/f/fi0kfwbzk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="oc0dpze7y"/><path class="fi0kfwbzk"/></g>`,
		"fallback": "streamline-plump:laptop",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/dif-_vbst.css';
import '../../css/a/af8wwtblo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="dif-_vbst"/><path class="af8wwtblo"/></g>`,
		"fallback": "streamline-plump:invisible-1",
	});
}

export default Component;

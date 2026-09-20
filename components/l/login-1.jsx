import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/o98ku-yjh.css';
import '../../css/r/rnlcy3bsa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="o98ku-yjh"/><path class="rnlcy3bsa"/></g>`,
		"fallback": "streamline-plump:login-1",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/r0dk64b4i.css';
import '../../css/a/aoikfqb5a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="r0dk64b4i"/><path class="aoikfqb5a"/></g>`,
		"fallback": "streamline-plump:reset-clock",
	});
}

export default Component;

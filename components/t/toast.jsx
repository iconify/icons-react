import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/ozcunh4jb.css';
import '../../css/j/jfm8_1bby.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ozcunh4jb"/><path class="jfm8_1bby"/></g>`,
		"fallback": "streamline-plump:toast",
	});
}

export default Component;

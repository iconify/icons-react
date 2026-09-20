import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/j/j27vatbwg.css';
import '../../css/f/f2ic6dbyk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="j27vatbwg"/><path class="f2ic6dbyk"/></g>`,
		"fallback": "streamline-plump:return-3",
	});
}

export default Component;

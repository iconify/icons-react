import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/w-xmu88jl.css';
import '../../css/h/hiexi2w6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="w-xmu88jl"/><path class="hiexi2w6k"/></g>`,
		"fallback": "streamline-plump:smoking-area",
	});
}

export default Component;

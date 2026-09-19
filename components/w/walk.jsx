import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isr_9phgq.css';

const viewBox = {"width":1152,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isr_9phgq"/>`,
		"fallback": "vs:walk",
	});
}

export default Component;

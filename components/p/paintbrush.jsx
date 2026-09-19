import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw0wrli5t.css';
import '../../css/p/pixrq9syg.css';
import '../../css/y/ybvkvjmwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw0wrli5t"/><path class="pixrq9syg"/><path class="ybvkvjmwr"/>`,
		"fallback": "ion:paintbrush",
	});
}

export default Component;

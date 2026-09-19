import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sy6dhfm5d.css';
import '../../css/n/n6x4k4dor.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="sy6dhfm5d"/><path class="n6x4k4dor"/></g>`,
		"fallback": "cryptocurrency-color:tnc",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/si8wr-b1d.css';
import '../../css/e/e4qzanbgf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="si8wr-b1d"/><path class="e4qzanbgf"/></g>`,
		"fallback": "cryptocurrency-color:vivo",
	});
}

export default Component;

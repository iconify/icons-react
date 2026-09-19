import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dpnqboxwv.css';
import '../../css/k/kl7o6wf0m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="dpnqboxwv"/><path class="kl7o6wf0m"/></g>`,
		"fallback": "cryptocurrency-color:vrc",
	});
}

export default Component;

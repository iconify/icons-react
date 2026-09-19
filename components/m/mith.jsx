import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cng0_ab3m.css';
import '../../css/a/a4wajpble.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="cng0_ab3m"/><path class="a4wajpble"/></g>`,
		"fallback": "cryptocurrency-color:mith",
	});
}

export default Component;

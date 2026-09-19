import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o225eqbfr.css';
import '../../css/s/saa_1lb-w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="o225eqbfr"/><path class="saa_1lb-w"/></g>`,
		"fallback": "cryptocurrency-color:lbc",
	});
}

export default Component;

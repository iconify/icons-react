import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/by981ukyg.css';
import '../../css/c/c6txoabxd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="by981ukyg"/><path class="c6txoabxd"/></g>`,
		"fallback": "cryptocurrency-color:tix",
	});
}

export default Component;

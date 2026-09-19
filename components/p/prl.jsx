import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ab055nbuo.css';
import '../../css/e/esf9b4b3g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ab055nbuo"/><path class="esf9b4b3g"/></g>`,
		"fallback": "cryptocurrency-color:prl",
	});
}

export default Component;

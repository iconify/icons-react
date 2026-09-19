import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/maiy0chzl.css';
import '../../css/b/b4fqxz28o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="maiy0chzl"/><path class="b4fqxz28o"/></g>`,
		"fallback": "cryptocurrency-color:lkk",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o6abegb9n.css';
import '../../css/j/jg68irbon.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="o6abegb9n"/><path class="jg68irbon"/></g>`,
		"fallback": "cryptocurrency-color:ppc",
	});
}

export default Component;

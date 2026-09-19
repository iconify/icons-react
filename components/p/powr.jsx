import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/ttiwe0-8s.css';
import '../../css/h/hvm0-wb1w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ttiwe0-8s"/><path class="hvm0-wb1w"/></g>`,
		"fallback": "cryptocurrency-color:powr",
	});
}

export default Component;

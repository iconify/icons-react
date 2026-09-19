import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s7jbpkb8n.css';
import '../../css/b/bg35mzkhb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="s7jbpkb8n"/><path class="bg35mzkhb"/></g>`,
		"fallback": "cryptocurrency-color:spank",
	});
}

export default Component;

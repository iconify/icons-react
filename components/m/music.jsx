import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n30-bmbyk.css';
import '../../css/x/xbu5ahbaq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="n30-bmbyk"/><path class="xbu5ahbaq"/></g>`,
		"fallback": "cryptocurrency-color:music",
	});
}

export default Component;

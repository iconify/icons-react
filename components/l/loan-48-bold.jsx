import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvzui74pn.css';
import '../../css/u/uxmtnwu0t.css';
import '../../css/r/rb9owibwy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvzui74pn"/><path class="uxmtnwu0t"/><path class="rb9owibwy"/>`,
		"fallback": "energy-icons:loan-48-bold",
	});
}

export default Component;

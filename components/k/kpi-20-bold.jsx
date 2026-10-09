import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4-t3sb5t.css';
import '../../css/y/y8hh19bpj.css';
import '../../css/j/j5eu97tgi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4-t3sb5t"/><path class="y8hh19bpj"/><path class="j5eu97tgi"/>`,
		"fallback": "energy-icons:kpi-20-bold",
	});
}

export default Component;

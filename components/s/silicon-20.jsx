import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytc7x632j.css';
import '../../css/d/dygm4jbzt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytc7x632j"/><path class="dygm4jbzt"/>`,
		"fallback": "energy-icons:silicon-20",
	});
}

export default Component;

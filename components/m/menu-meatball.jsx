import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hki4sqbjq.css';
import '../../css/l/l5goj9tdn.css';
import '../../css/n/n-g5w935x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="hki4sqbjq"/><circle class="l5goj9tdn"/><circle class="n-g5w935x"/></g>`,
		"fallback": "charm:menu-meatball",
	});
}

export default Component;

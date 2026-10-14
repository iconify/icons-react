import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kjz6ucc4j.css';
import '../../css/d/dmda8q39s.css';
import '../../css/e/er5tkr_vy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kjz6ucc4j"/><path class="dmda8q39s"/><path class="er5tkr_vy"/></g>`,
		"fallback": "matita:shopping-cart",
	});
}

export default Component;

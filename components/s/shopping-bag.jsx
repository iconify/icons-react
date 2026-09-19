import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nwwi13bel.css';
import '../../css/h/hdmtrbbqv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="nwwi13bel"/><path class="hdmtrbbqv"/></g>`,
		"fallback": "charm:shopping-bag",
	});
}

export default Component;

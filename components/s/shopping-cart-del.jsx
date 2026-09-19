import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhl70bbot.css';
import '../../css/o/o1rvf3vak.css';
import '../../css/e/eafo8gg7b.css';
import '../../css/v/vk9si75ke.css';
import '../../css/b/bpyn5-bua.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dhl70bbot"/><path class="o1rvf3vak"/><circle class="eafo8gg7b"/><circle class="vk9si75ke"/><path class="bpyn5-bua"/></g>`,
		"fallback": "icon-park:shopping-cart-del",
	});
}

export default Component;

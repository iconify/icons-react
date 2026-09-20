import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pydkrm17a.css';
import '../../css/a/a989ejbdj.css';
import '../../css/l/lxyi6i7oj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pydkrm17a"/><path class="a989ejbdj"/><path class="lxyi6i7oj"/></g>`,
		"fallback": "streamline:shopping-cart-basket-1-shopping-basket",
	});
}

export default Component;

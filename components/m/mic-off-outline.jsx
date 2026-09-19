import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty51eibwy.css';
import '../../css/x/xi_khzqzd.css';
import '../../css/b/beok1wbax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty51eibwy"/><path class="xi_khzqzd"/><path class="beok1wbax"/>`,
		"fallback": "ion:mic-off-outline",
	});
}

export default Component;

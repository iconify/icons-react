import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxd28wbfb.css';
import '../../css/j/jpb-onl0e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxd28wbfb"/><path class="jpb-onl0e"/>`,
		"fallback": "cil:sim",
	});
}

export default Component;

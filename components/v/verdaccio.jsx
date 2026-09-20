import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrsdmp1_y.css';
import '../../css/t/tjg9g-oad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrsdmp1_y"/><path class="tjg9g-oad"/>`,
		"fallback": "selfhst:verdaccio",
	});
}

export default Component;

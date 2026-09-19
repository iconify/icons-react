import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw-pbdcck.css';
import '../../css/u/ucdp9ybuj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw-pbdcck"/><path class="ucdp9ybuj"/>`,
		"fallback": "fxemoji:page",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cztp4ub5c.css';
import '../../css/x/xn7w50bnc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cztp4ub5c"/><path class="xn7w50bnc"/>`,
		"fallback": "carbon:point-of-presence",
	});
}

export default Component;

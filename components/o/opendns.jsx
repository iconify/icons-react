import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4y3k-p3k.css';
import '../../css/n/nv3l533ys.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4y3k-p3k"/><path class="nv3l533ys"/>`,
		"fallback": "selfhst:opendns",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_jj5jfvq.css';
import '../../css/l/lrth8l6xz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_jj5jfvq"/><path class="lrth8l6xz"/>`,
		"fallback": "selfhst:rancher-hypper",
	});
}

export default Component;

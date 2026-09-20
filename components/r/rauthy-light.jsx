import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0dz0lbab.css';
import '../../css/c/c8p6lwb2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0dz0lbab"/><path class="c8p6lwb2o"/>`,
		"fallback": "selfhst:rauthy-light",
	});
}

export default Component;

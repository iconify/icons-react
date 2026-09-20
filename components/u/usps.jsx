import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwdt2v70o.css';
import '../../css/k/kqe51pb_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwdt2v70o"/><path class="kqe51pb_g"/>`,
		"fallback": "selfhst:usps",
	});
}

export default Component;

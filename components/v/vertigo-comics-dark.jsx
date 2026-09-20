import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2aedl7_f.css';
import '../../css/z/zg93_j8hp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2aedl7_f"/><path class="zg93_j8hp"/>`,
		"fallback": "selfhst:vertigo-comics-dark",
	});
}

export default Component;

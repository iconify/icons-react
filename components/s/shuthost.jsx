import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_kh_l8jn.css';
import '../../css/k/kekxfrtgs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_kh_l8jn"/><path class="kekxfrtgs"/>`,
		"fallback": "selfhst:shuthost",
	});
}

export default Component;

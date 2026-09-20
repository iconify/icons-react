import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnhbskd2a.css';
import '../../css/b/bnsgscc2v.css';
import '../../css/f/f2_b1ubxm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnhbskd2a"/><path class="bnsgscc2v"/><path class="f2_b1ubxm"/>`,
		"fallback": "selfhst:trailarr-dark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki9s1utoq.css';
import '../../css/d/da16a4bkk.css';
import '../../css/i/ieb391brm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ki9s1utoq"/><path class="da16a4bkk"/><path class="ieb391brm"/>`,
		"fallback": "selfhst:typestash",
	});
}

export default Component;

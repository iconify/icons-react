import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue-hx7a2u.css';
import '../../css/r/r97zvfb6s.css';
import '../../css/c/c18_ysapx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue-hx7a2u"/><path class="r97zvfb6s"/><path class="c18_ysapx"/>`,
		"fallback": "selfhst:taiga-dark",
	});
}

export default Component;

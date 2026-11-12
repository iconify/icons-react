import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8ly-hb2i.css';
import '../../css/f/f9y25p_8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8ly-hb2i"/><path class="f9y25p_8h"/>`,
		"fallback": "selfhst:subarr",
	});
}

export default Component;

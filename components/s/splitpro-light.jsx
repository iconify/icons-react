import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g58_hc9td.css';
import '../../css/w/wh_63k2aq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g58_hc9td"/><path class="wh_63k2aq"/>`,
		"fallback": "selfhst:splitpro-light",
	});
}

export default Component;

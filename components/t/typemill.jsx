import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqu2_e4mu.css';
import '../../css/o/ohi1dmbgd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pqu2_e4mu"/><path class="ohi1dmbgd"/>`,
		"fallback": "selfhst:typemill",
	});
}

export default Component;

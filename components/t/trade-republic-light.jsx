import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr_hn414m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr_hn414m"/>`,
		"fallback": "selfhst:trade-republic-light",
	});
}

export default Component;

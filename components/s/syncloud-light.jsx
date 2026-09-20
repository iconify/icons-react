import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrgg1kb1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrgg1kb1w"/>`,
		"fallback": "selfhst:syncloud-light",
	});
}

export default Component;

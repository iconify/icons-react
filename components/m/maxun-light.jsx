import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0ofunqlf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0ofunqlf"/>`,
		"fallback": "selfhst:maxun-light",
	});
}

export default Component;

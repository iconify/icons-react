import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u671_1o_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u671_1o_l"/>`,
		"fallback": "selfhst:newsku-light",
	});
}

export default Component;

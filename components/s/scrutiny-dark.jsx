import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c95rs2b_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c95rs2b_n"/>`,
		"fallback": "selfhst:scrutiny-dark",
	});
}

export default Component;

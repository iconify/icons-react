import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_821ibzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_821ibzj"/>`,
		"fallback": "selfhst:kjell-company-dark",
	});
}

export default Component;

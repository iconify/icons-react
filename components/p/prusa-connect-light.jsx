import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btj23f13n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btj23f13n"/>`,
		"fallback": "selfhst:prusa-connect-light",
	});
}

export default Component;

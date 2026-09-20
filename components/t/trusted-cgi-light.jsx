import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqm3jdo2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqm3jdo2i"/>`,
		"fallback": "selfhst:trusted-cgi-light",
	});
}

export default Component;

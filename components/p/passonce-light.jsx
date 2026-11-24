import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my8pr8q6g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my8pr8q6g"/>`,
		"fallback": "selfhst:passonce-light",
	});
}

export default Component;

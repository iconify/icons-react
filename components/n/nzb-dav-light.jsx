import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_8q8acdl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_8q8acdl"/>`,
		"fallback": "selfhst:nzb-dav-light",
	});
}

export default Component;

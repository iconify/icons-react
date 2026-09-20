import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dki4pzb1t.css';
import '../../css/c/clec0e7ll.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dki4pzb1t"/><path class="clec0e7ll"/>`,
		"fallback": "selfhst:roundcube-dark",
	});
}

export default Component;

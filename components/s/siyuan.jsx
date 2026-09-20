import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7020pbgf.css';
import '../../css/p/p-fy8svxd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7020pbgf"/><path class="p-fy8svxd"/>`,
		"fallback": "selfhst:siyuan",
	});
}

export default Component;

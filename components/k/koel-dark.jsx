import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h63q1abgr.css';
import '../../css/g/g74ykvjvs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h63q1abgr"/><path class="g74ykvjvs"/>`,
		"fallback": "selfhst:koel-dark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6onu0rsr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6onu0rsr"/>`,
		"fallback": "selfhst:siyuan-dark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbrl8dbjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbrl8dbjj"/>`,
		"fallback": "selfhst:retroassembly-light",
	});
}

export default Component;

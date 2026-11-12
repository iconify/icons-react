import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh61nybyw.css';
import '../../css/r/rhmy8zb_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh61nybyw"/><path class="rhmy8zb_w"/>`,
		"fallback": "selfhst:ovumcy-dark",
	});
}

export default Component;

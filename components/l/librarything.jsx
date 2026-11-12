import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq-vo4ugb.css';
import '../../css/x/xtkshpbwk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq-vo4ugb"/><path class="xtkshpbwk"/>`,
		"fallback": "selfhst:librarything",
	});
}

export default Component;

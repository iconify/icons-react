import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vlwatom3c.css';
import '../../css/x/xvc6nkbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vlwatom3c"/><path class="xvc6nkbol"/></g>`,
		"fallback": "reicon:sms-search-filled",
	});
}

export default Component;

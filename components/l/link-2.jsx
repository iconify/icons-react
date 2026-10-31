import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/br4crqm4h.css';
import '../../css/w/wg752-bxn.css';
import '../../css/u/umny35whw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="br4crqm4h wm-shadow"/><path class="wg752-bxn wm-shadow"/><path class="umny35whw"/></g>`,
		"fallback": "withicons-brutal:link-2",
	});
}

export default Component;

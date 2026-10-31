import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u0wobb-1e.css';
import '../../css/x/xu01bccni.css';
import '../../css/a/aloxzvhsw.css';
import '../../css/u/up_78dixb.css';
import '../../css/b/b-jqcob_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="u0wobb-1e wm-shadow"/><path class="wm-shadow xu01bccni"/><path class="aloxzvhsw"/><path class="up_78dixb"/><path class="b-jqcob_n"/></g>`,
		"fallback": "withicons-brutal:save",
	});
}

export default Component;

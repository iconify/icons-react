import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t29f6pbei.css';
import '../../css/h/h7l1m8bbl.css';
import '../../css/v/v2tnttj0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="t29f6pbei"/><path class="h7l1m8bbl"/><circle class="v2tnttj0f"/></g>`,
		"fallback": "andrsrxn:snowflake",
	});
}

export default Component;

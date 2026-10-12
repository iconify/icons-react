import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dn_ldhlew.css';
import '../../css/r/rud6x7bdi.css';
import '../../css/z/zaqu-2byh.css';
import '../../css/f/fd7we2b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dn_ldhlew"/><path class="rud6x7bdi"/><path class="zaqu-2byh"/><path class="fd7we2b3v"/></g>`,
		"fallback": "andrsrxn:swords",
	});
}

export default Component;

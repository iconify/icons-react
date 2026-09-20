import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x7u_jr25u.css';
import '../../css/c/cg677o3fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x7u_jr25u"/><path class="cg677o3fu"/></g>`,
		"fallback": "solar:transfer-horizontal-broken",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p4nocrihx.css';
import '../../css/v/v_rcp4-4p.css';
import '../../css/o/okx5q-b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p4nocrihx"/><path class="v_rcp4-4p"/><path class="okx5q-b1i"/></g>`,
		"fallback": "hugeicons:subpoena",
	});
}

export default Component;

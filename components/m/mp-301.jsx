import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sap3gob0u.css';
import '../../css/m/m87rrbbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sap3gob0u"/><path class="m87rrbbex"/></g>`,
		"fallback": "hugeicons:mp-301",
	});
}

export default Component;

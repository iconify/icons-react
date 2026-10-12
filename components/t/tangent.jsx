import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qsn51xbdb.css';
import '../../css/d/dkt1wo1ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qsn51xbdb"/><path class="dkt1wo1ce"/></g>`,
		"fallback": "andrsrxn:tangent",
	});
}

export default Component;

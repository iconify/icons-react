import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tm1lnyblt.css';
import '../../css/z/zydpfe68l.css';
import '../../css/w/wzyv2vb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tm1lnyblt"/><path class="zydpfe68l"/><path class="wzyv2vb4v"/></g>`,
		"fallback": "streamline-sharp-color:screwdriver-wrench-flat",
	});
}

export default Component;

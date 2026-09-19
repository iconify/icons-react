import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/znqi52bou.css';
import '../../css/j/ju6djclts.css';
import '../../css/r/rsp6aac3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="znqi52bou"/><path class="ju6djclts"/><path class="rsp6aac3f"/></g>`,
		"fallback": "hugeicons:property-view",
	});
}

export default Component;

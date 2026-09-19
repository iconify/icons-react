import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3kb4cgpl.css';
import '../../css/z/zup7-ab-f.css';
import '../../css/x/xr1zzs9rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="r3kb4cgpl"><path class="zup7-ab-f"/><circle class="xr1zzs9rr"/></g>`,
		"fallback": "iconamoon:number-0-circle-bold",
	});
}

export default Component;

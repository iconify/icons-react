import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zrxd1okbh.css';
import '../../css/l/l4sq9d0tz.css';
import '../../css/x/xr94vgbux.css';
import '../../css/m/m86y5nxtn.css';
import '../../css/f/f-ijm0bse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zrxd1okbh"/><path class="l4sq9d0tz"/><path class="xr94vgbux"/><path class="m86y5nxtn"/><path class="f-ijm0bse"/></g>`,
		"fallback": "solar:list-plus-bold",
	});
}

export default Component;

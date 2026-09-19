import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4v7f-bwd.css';
import '../../css/y/yerxmuvtl.css';
import '../../css/z/zlkc42vxd.css';
import '../../css/i/i_tz54_bx.css';
import '../../css/m/m8a14abit.css';
import '../../css/c/czggyxesy.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 l4v7f-bwd"/><path class="clr-i-outline clr-i-outline-path-2 yerxmuvtl"/><path class="clr-i-outline clr-i-outline-path-3 zlkc42vxd"/><path class="clr-i-outline clr-i-outline-path-4 i_tz54_bx"/><path class="clr-i-outline clr-i-outline-path-5 m8a14abit"/><path class="clr-i-outline clr-i-outline-path-6 czggyxesy"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:number-list-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rr5jdpbbl.css';
import '../../css/e/e56qc54my.css';
import '../../css/t/t64jy78oe.css';
import '../../css/x/x677y-bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="rr5jdpbbl"/><circle class="e56qc54my"/><path class="t64jy78oe"/><path class="x677y-bul"/></g>`,
		"fallback": "hugeicons:tractor",
	});
}

export default Component;

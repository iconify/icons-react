import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h_kcuvj8y.css';
import '../../css/t/tcwe4ewrv.css';
import '../../css/i/i_hl8sbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h_kcuvj8y"/><circle class="tcwe4ewrv"/><path class="i_hl8sbik"/></g>`,
		"fallback": "hugeicons:user-warning-01",
	});
}

export default Component;

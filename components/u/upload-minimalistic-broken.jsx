import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kbcdf4iop.css';
import '../../css/a/ac19bow3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kbcdf4iop"/><path class="ac19bow3y"/></g>`,
		"fallback": "solar:upload-minimalistic-broken",
	});
}

export default Component;

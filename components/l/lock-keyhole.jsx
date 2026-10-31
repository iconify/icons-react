import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/thvrl_b5e.css';
import '../../css/m/mkdyumbaw.css';
import '../../css/z/zv_vmr3ox.css';
import '../../css/l/lcatu8byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="thvrl_b5e wm-shadow"/><path class="mkdyumbaw wm-shadow"/><path class="zv_vmr3ox"/><path class="lcatu8byl"/></g>`,
		"fallback": "withicons-brutal:lock-keyhole",
	});
}

export default Component;

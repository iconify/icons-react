import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnb90nbxf.css';
import '../../css/x/xq9-69b7x.css';
import '../../css/l/lv_4r6b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnb90nbxf"/><path class="xq9-69b7x"/><path class="lv_4r6b_g"/>`,
		"fallback": "solar:round-double-alt-arrow-up-bold-duotone",
	});
}

export default Component;

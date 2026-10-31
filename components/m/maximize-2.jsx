import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vxl2imb0t.css';
import '../../css/o/ope1nybbx.css';
import '../../css/x/xg3f7vrci.css';
import '../../css/a/ajpm3vd2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vxl2imb0t wm-shadow"/><path class="ope1nybbx wm-shadow"/><path class="xg3f7vrci"/><path class="ajpm3vd2r"/></g>`,
		"fallback": "withicons-brutal:maximize-2",
	});
}

export default Component;

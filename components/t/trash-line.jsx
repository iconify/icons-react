import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df_i2ghzy.css';
import '../../css/h/hjx6v9w2g.css';
import '../../css/w/wdf7q6bld.css';
import '../../css/m/myyjnnbwn.css';
import '../../css/t/t8dxy78qr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 df_i2ghzy"/><path class="clr-i-outline clr-i-outline-path-2 hjx6v9w2g"/><path class="clr-i-outline clr-i-outline-path-3 wdf7q6bld"/><path class="clr-i-outline clr-i-outline-path-4 myyjnnbwn"/><path class="clr-i-outline clr-i-outline-path-5 t8dxy78qr"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:trash-line",
	});
}

export default Component;

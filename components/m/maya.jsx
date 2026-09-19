import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/h/h_bv8bcou.css';
import '../../css/d/du5hmfmcc.css';
import '../../css/k/kkm67uicc.css';
import '../../css/z/z16u8_zyd.css';
import '../../css/b/bl5p7tb0y.css';
import '../../css/a/a1xgntbyx.css';
import '../../css/o/or360rchn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><rect class="h_bv8bcou"/><rect class="du5hmfmcc"/><rect class="kkm67uicc"/><rect class="z16u8_zyd"/><rect class="bl5p7tb0y"/><path class="a1xgntbyx"/><path class="or360rchn"/></g>`,
		"fallback": "icon-park:maya",
	});
}

export default Component;

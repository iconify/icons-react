import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c37_ywsig.css';
import '../../css/l/lkq7kmb6r.css';
import '../../css/o/o91kfxbtx.css';
import '../../css/m/migh2ubna.css';
import '../../css/m/mpr9t-bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c37_ywsig"/><path class="lkq7kmb6r"/><path class="o91kfxbtx"/><path class="migh2ubna"/><path class="mpr9t-bdu"/></g>`,
		"fallback": "reicon:music-square-add",
	});
}

export default Component;

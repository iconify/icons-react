import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/s_yc880na.css';
import '../../css/r/r1soh6b2r.css';
import '../../css/r/r6zzsmb6r.css';
import '../../css/p/pfb0nubbx.css';
import '../../css/p/pniei9crh.css';
import '../../css/e/egl7f3bmr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="s_yc880na"/><path class="r1soh6b2r"/><path class="r6zzsmb6r"/><path class="pfb0nubbx"/><path class="pniei9crh"/><path class="egl7f3bmr"/></g>`,
		"fallback": "icon-park:repositioning",
	});
}

export default Component;

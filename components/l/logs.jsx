import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvkt50bhv.css';
import '../../css/m/mje9y5blo.css';
import '../../css/l/l-v723wkl.css';
import '../../css/z/z57w_5sfl.css';
import '../../css/k/k577frnsr.css';
import '../../css/y/ykmcv3b1s.css';
import '../../css/r/r1zxk5bwd.css';
import '../../css/m/mx24zdfqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvkt50bhv wm-shadow"/><path class="mje9y5blo wm-k"/><path class="l-v723wkl wm-k"/><path class="wm-k z57w_5sfl"/><path class="k577frnsr wm-k"/><path class="wm-k ykmcv3b1s"/><path class="r1zxk5bwd wm-shine"/><path class="mx24zdfqu wm-a"/>`,
		"fallback": "withicons-pastel:logs",
	});
}

export default Component;

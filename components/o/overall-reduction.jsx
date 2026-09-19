import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ebs_h0bee.css';
import '../../css/b/bihpxacjr.css';
import '../../css/e/eyok3_b1p.css';
import '../../css/h/h701m-n6k.css';
import '../../css/h/h-ks4l-bo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ebs_h0bee"/><path class="bihpxacjr"/><path class="eyok3_b1p"/><path class="h701m-n6k"/><path class="h-ks4l-bo"/></g>`,
		"fallback": "icon-park:overall-reduction",
	});
}

export default Component;

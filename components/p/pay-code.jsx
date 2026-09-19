import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/z/zxk766oyl.css';
import '../../css/b/bxrtjkw0l.css';
import '../../css/e/ewioykboo.css';
import '../../css/c/cq-wmosso.css';
import '../../css/d/dqdvanavr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="zxk766oyl"/><path class="bxrtjkw0l"/><path class="ewioykboo"/><path class="cq-wmosso"/><path class="dqdvanavr"/></g>`,
		"fallback": "icon-park:pay-code",
	});
}

export default Component;

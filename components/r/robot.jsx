import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/n/n2u8ozbbq.css';
import '../../css/v/v7mussbrt.css';
import '../../css/l/lvfg3zbfy.css';
import '../../css/m/mybdgyglo.css';
import '../../css/t/t1x3gbbjf.css';
import '../../css/t/tqlqr7zde.css';
import '../../css/f/fxzfmdb1d.css';
import '../../css/x/x97sa-7dv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><rect class="n2u8ozbbq"/><path class="v7mussbrt"/><path class="lvfg3zbfy"/><circle class="mybdgyglo"/><circle class="t1x3gbbjf"/><rect class="tqlqr7zde"/><path class="fxzfmdb1d"/><path class="x97sa-7dv"/></g>`,
		"fallback": "icon-park:robot",
	});
}

export default Component;

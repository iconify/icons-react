import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/umr_frbtc.css';
import '../../css/v/vv65r2bzm.css';
import '../../css/c/cxgw7xtek.css';
import '../../css/a/ajk_jeboo.css';
import '../../css/j/j7xqtowqr.css';
import '../../css/w/wb71mlb-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="umr_frbtc"/><path class="vv65r2bzm"/><path class="cxgw7xtek"/><path class="ajk_jeboo"/><path class="j7xqtowqr"/><path class="wb71mlb-z"/></g>`,
		"fallback": "streamline-freehand-color:moving-walkway-luggage-1",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mqc4xwbty.css';
import '../../css/o/olgf42hdg.css';
import '../../css/r/r_urdhbzw.css';
import '../../css/v/vwzwhubnx.css';
import '../../css/r/r-62znbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="mqc4xwbty"/><path class="olgf42hdg"/><path class="r_urdhbzw"/><path class="vwzwhubnx"/><path class="r-62znbuy"/></g>`,
		"fallback": "matita:pizza-slice",
	});
}

export default Component;

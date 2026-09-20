import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj9i6s7zz.css';
import '../../css/z/ztu_98bpo.css';
import '../../css/r/ruwi1m7ng.css';
import '../../css/m/mslu5bbhe.css';
import '../../css/q/qlc12_1qe.css';
import '../../css/z/zahbnx45o.css';
import '../../css/t/tb5rjlnuu.css';
import '../../css/s/sjtwk4bgq.css';
import '../../css/x/xw8az5gzx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj9i6s7zz"/><path class="ztu_98bpo"/><path class="ruwi1m7ng"/><path class="mslu5bbhe"/><path class="qlc12_1qe"/><path class="zahbnx45o"/><circle class="tb5rjlnuu"/><circle class="sjtwk4bgq"/><circle class="xw8az5gzx"/>`,
		"fallback": "openmoji:pager",
	});
}

export default Component;

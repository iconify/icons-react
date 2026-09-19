import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5vgbcb_s.css';
import '../../css/h/ha1017w6s.css';
import '../../css/v/v5ypc0jqx.css';
import '../../css/k/ksbkozbzk.css';
import '../../css/t/tj21xnbse.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5vgbcb_s"/><path class="ha1017w6s"/><path class="v5ypc0jqx"/><path class="ksbkozbzk"/><path class="tj21xnbse"/>`,
		"fallback": "flag:pa-4x3",
	});
}

export default Component;

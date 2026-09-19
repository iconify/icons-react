import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bo1_r_bkn.css';
import '../../css/k/k_95onbhk.css';
import '../../css/x/xy7bfo4gq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bo1_r_bkn"/><path class="k_95onbhk"/><rect class="xy7bfo4gq"/></g>`,
		"fallback": "charm:newspaper",
	});
}

export default Component;

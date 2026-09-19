import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/t/thxu83myu.css';
import '../../css/l/l9p3y_bpx.css';
import '../../css/h/hy9w33b_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="thxu83myu"/><path class="l9p3y_bpx"/><path class="hy9w33b_e"/></g>`,
		"fallback": "icon-park-outline:tree-two",
	});
}

export default Component;

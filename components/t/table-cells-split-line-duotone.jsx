import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f_e3mnbwd.css';
import '../../css/b/b8504g80a.css';
import '../../css/m/myo_spbcy.css';
import '../../css/b/b2vvr6bvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f_e3mnbwd"/><path class="b8504g80a"/><path class="myo_spbcy"/><path class="b2vvr6bvh"/></g>`,
		"fallback": "solar:table-cells-split-line-duotone",
	});
}

export default Component;

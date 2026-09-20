import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/c/ciziwtbzu.css';
import '../../css/z/zg2kuvbcb.css';
import '../../css/p/p1hhowniu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="ciziwtbzu"/><path class="zg2kuvbcb"/><path class="p1hhowniu"/></g>`,
		"fallback": "reicon:moneys",
	});
}

export default Component;

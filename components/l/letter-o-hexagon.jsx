import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zut4hpbef.css';
import '../../css/s/sts8xrb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zut4hpbef"/><path class="sts8xrb0w"/></g>`,
		"fallback": "mynaui:letter-o-hexagon",
	});
}

export default Component;

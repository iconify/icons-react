import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v05blqihb.css';
import '../../css/x/xptxz7byf.css';
import '../../css/j/jt_f4vb-f.css';
import '../../css/z/zw4mq0blp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v05blqihb"/><path class="xptxz7byf"/><path class="jt_f4vb-f"/><path class="zw4mq0blp"/></g>`,
		"fallback": "streamline-ultimate:petri-dish-2",
	});
}

export default Component;

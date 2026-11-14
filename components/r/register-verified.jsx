import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k50ntoe8q.css';
import '../../css/y/yegio-bcn.css';
import '../../css/j/jqrtgfb_c.css';
import '../../css/f/ff1lhab2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k50ntoe8q"/><rect class="yegio-bcn"/><path class="jqrtgfb_c"/><path class="ff1lhab2w"/></g>`,
		"fallback": "evicons:register-verified",
	});
}

export default Component;

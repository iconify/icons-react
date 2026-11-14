import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/awdo0w7_l.css';
import '../../css/w/w0ggf-zis.css';
import '../../css/p/paigngb6y.css';
import '../../css/x/xt409c-oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="awdo0w7_l"/><circle class="w0ggf-zis"/><circle class="paigngb6y"/><path class="xt409c-oa"/></g>`,
		"fallback": "evicons:truck-electric",
	});
}

export default Component;

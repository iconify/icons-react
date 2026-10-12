import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i00bmr7ot.css';
import '../../css/f/fv3l_rq4r.css';
import '../../css/w/wgi3edvsq.css';
import '../../css/m/mqqdcl91y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i00bmr7ot"/><path class="fv3l_rq4r"/><path class="wgi3edvsq"/><path class="mqqdcl91y"/></g>`,
		"fallback": "andrsrxn:message-question",
	});
}

export default Component;

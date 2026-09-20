import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dt-je9w2i.css';
import '../../css/a/ad6etcbld.css';
import '../../css/w/wd2oux1ap.css';
import '../../css/i/iaurxkbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dt-je9w2i"/><path class="ad6etcbld"/><path class="wd2oux1ap"/><path class="iaurxkbqz"/></g>`,
		"fallback": "streamline-freehand-color:shopping-basket-arrow-in",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/evtx90wbp.css';
import '../../css/c/ckr7bsgcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="evtx90wbp"/><path class="ckr7bsgcv"/></g>`,
		"fallback": "streamline-sharp-color:pinwheel-flat",
	});
}

export default Component;

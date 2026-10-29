import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yttz3kdvz.css';
import '../../css/e/eo7h87buu.css';
import '../../css/n/nlw4k8bvo.css';
import '../../css/n/nnyd2wbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="yttz3kdvz"/><path class="eo7h87buu wm-a"/><path class="nlw4k8bvo wm-k"/><path class="nnyd2wbkl wm-a"/></g>`,
		"fallback": "withicons:smile-sketch",
	});
}

export default Component;

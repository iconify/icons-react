import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t2_uckixe.css';
import '../../css/v/vvk04ybtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="t2_uckixe wm-k"/><path class="vvk04ybtj wm-a"/></g>`,
		"fallback": "withicons:variable-gloss",
	});
}

export default Component;

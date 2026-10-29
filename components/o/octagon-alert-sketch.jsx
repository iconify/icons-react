import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e5-xx9b2v.css';
import '../../css/t/tyv5asbam.css';
import '../../css/n/n8f7ss6vj.css';
import '../../css/v/v-vraybzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e5-xx9b2v"/><path class="tyv5asbam wm-a"/><path class="n8f7ss6vj wm-k"/><path class="v-vraybzh wm-a"/></g>`,
		"fallback": "withicons:octagon-alert-sketch",
	});
}

export default Component;

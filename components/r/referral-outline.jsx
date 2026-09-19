import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fj5bw92pz.css';
import '../../css/n/nwonhr82a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fj5bw92pz"/><path clip-rule="evenodd" class="nwonhr82a"/></g>`,
		"fallback": "healthicons:referral-outline",
	});
}

export default Component;

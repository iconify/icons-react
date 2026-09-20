import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iv4z4zbpc.css';
import '../../css/j/jjq_smbpx.css';
import '../../css/q/qk1oudndu.css';
import '../../css/n/nbkmm9bhe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iv4z4zbpc"/><path clip-rule="evenodd" class="jjq_smbpx"/><path class="qk1oudndu"/><path class="nbkmm9bhe"/></g>`,
		"fallback": "pepicons-print:syringe-off",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/q/qvjyztbml.css';
import '../../css/w/wxf9x6bkf.css';
import '../../css/w/w1o5tbc-z.css';
import '../../css/j/j6wulbbca.css';
import '../../css/m/mhj-3ackm.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="qvjyztbml"/><path clip-rule="evenodd" class="wxf9x6bkf"/><path clip-rule="evenodd" class="w1o5tbc-z"/></g><path clip-rule="evenodd" class="j6wulbbca"/><path clip-rule="evenodd" class="mhj-3ackm"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:planet-ring-off",
	});
}

export default Component;

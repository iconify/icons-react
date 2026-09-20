import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/w/wi9_bxbcj.css';
import '../../css/b/b40hxqbrx.css';
import '../../css/i/iscyndbhr.css';
import '../../css/g/g-9pfqoyk.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path clip-rule="evenodd" class="wi9_bxbcj"/><path class="b40hxqbrx"/></g><path clip-rule="evenodd" class="iscyndbhr"/><path class="g-9pfqoyk"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:speaker-low-circle-off",
	});
}

export default Component;

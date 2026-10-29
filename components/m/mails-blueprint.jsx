import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ehr0l2bqh.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/k/kls9jf3gj.css';
import '../../css/w/wwvbehbns.css';
import '../../css/p/pwwumbbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ehr0l2bqh wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="kls9jf3gj wm-k"/><path class="wm-a wwvbehbns"/><path class="pwwumbbzr wm-a"/></g>`,
		"fallback": "withicons:mails-blueprint",
	});
}

export default Component;

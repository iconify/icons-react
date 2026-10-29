import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/n/nf8i06eer.css';
import '../../css/c/c93kobbbl.css';
import '../../css/o/o3c89cbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="nf8i06eer wm-k"/><path class="c93kobbbl wm-a"/><path class="o3c89cbbl wm-k"/></g>`,
		"fallback": "withicons:sliders-blueprint",
	});
}

export default Component;

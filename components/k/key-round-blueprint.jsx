import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nqm7mkz3u.css';
import '../../css/k/k63y7j0zf.css';
import '../../css/g/goo9dshtt.css';
import '../../css/t/tvug85bii.css';
import '../../css/i/ibqsyxb2r.css';
import '../../css/b/b86m5ybhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nqm7mkz3u wm-deco"/><path class="k63y7j0zf wm-deco"/><path class="goo9dshtt wm-deco"/><path class="tvug85bii wm-k"/><path class="ibqsyxb2r wm-a"/><path class="b86m5ybhz wm-k"/></g>`,
		"fallback": "withicons:key-round-blueprint",
	});
}

export default Component;

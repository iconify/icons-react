import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nzd01mb0l.css';
import '../../css/w/wlhyncciu.css';
import '../../css/d/dpfqr4jfd.css';
import '../../css/t/to6oxfb5t.css';
import '../../css/b/bqs4254cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nzd01mb0l wm-k"/><path class="wlhyncciu wm-a"/><path class="dpfqr4jfd wm-s"/><path class="to6oxfb5t"/><path class="bqs4254cf"/></g>`,
		"fallback": "withicons-bauhaus:rakhi",
	});
}

export default Component;

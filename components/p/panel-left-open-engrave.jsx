import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ugmyip8ns.css';
import '../../css/r/rzk9uabwj.css';
import '../../css/c/cin9b-b7g.css';
import '../../css/a/ao21d5blb.css';
import '../../css/r/r21y7m8sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ugmyip8ns wm-k"/><path class="rzk9uabwj wm-a"/><path class="cin9b-b7g wm-shadow"/><path class="ao21d5blb wm-k"/><path class="r21y7m8sc wm-a"/></g>`,
		"fallback": "withicons:panel-left-open-engrave",
	});
}

export default Component;

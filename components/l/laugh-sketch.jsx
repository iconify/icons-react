import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/shcvw7bpa.css';
import '../../css/e/ejb7eacvb.css';
import '../../css/v/v41ir48ee.css';
import '../../css/k/kqwl-3bjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="shcvw7bpa"/><path class="ejb7eacvb wm-a"/><path class="v41ir48ee wm-k"/><path class="kqwl-3bjd wm-a"/></g>`,
		"fallback": "withicons:laugh-sketch",
	});
}

export default Component;

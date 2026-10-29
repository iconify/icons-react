import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hv-edyz7g.css';
import '../../css/i/i77gb-bmq.css';
import '../../css/w/wzoywxz7p.css';
import '../../css/h/hgmtejbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hv-edyz7g wm-k"/><path class="i77gb-bmq wm-a"/><path class="wzoywxz7p"/><path class="hgmtejbzx"/></g>`,
		"fallback": "withicons-bauhaus:scan-search",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hv-edyz7g.css';
import '../../css/w/wjpztubau.css';
import '../../css/k/kb-c9vbzj.css';
import '../../css/n/nm92qabko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hv-edyz7g wm-k"/><path class="wjpztubau wm-a"/><path class="kb-c9vbzj wm-k"/><path class="nm92qabko"/></g>`,
		"fallback": "withicons-bauhaus:scan-eye",
	});
}

export default Component;

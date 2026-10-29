import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bm0hm5bhn.css';
import '../../css/h/hst8ehbqd.css';
import '../../css/i/i6bzijq7p.css';
import '../../css/q/q19uih-go.css';
import '../../css/a/a0-g48brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bm0hm5bhn wm-k"/><path class="hst8ehbqd wm-a"/><path class="i6bzijq7p wm-shadow"/><path class="q19uih-go wm-k"/><path class="a0-g48brp wm-a"/></g>`,
		"fallback": "withicons:pen-line-engrave",
	});
}

export default Component;

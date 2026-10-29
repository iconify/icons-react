import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lyph-t_jj.css';
import '../../css/z/z46hetcke.css';
import '../../css/t/t_ix-vbfv.css';
import '../../css/t/tsq-02buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lyph-t_jj"/><path class="wm-a z46hetcke"/><path class="t_ix-vbfv wm-k"/><path class="tsq-02buu wm-a"/></g>`,
		"fallback": "withicons:sticky-note-sketch",
	});
}

export default Component;

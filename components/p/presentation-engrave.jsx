import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b1sbf1r7d.css';
import '../../css/i/iwt4btmpj.css';
import '../../css/j/jqk00rbpu.css';
import '../../css/c/camcnmb1b.css';
import '../../css/d/dljqukb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b1sbf1r7d wm-k"/><path class="iwt4btmpj wm-a"/><path class="jqk00rbpu wm-shadow"/><path class="camcnmb1b wm-k"/><path class="dljqukb2t wm-a"/></g>`,
		"fallback": "withicons:presentation-engrave",
	});
}

export default Component;

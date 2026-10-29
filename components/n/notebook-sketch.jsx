import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f25k-k9hf.css';
import '../../css/q/qy8smfuzj.css';
import '../../css/j/jjk3p5bnj.css';
import '../../css/y/yzld8fb9w.css';
import '../../css/o/o5cn7ub4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f25k-k9hf"/><path class="qy8smfuzj wm-k"/><path class="jjk3p5bnj wm-k"/><path class="wm-a yzld8fb9w"/><path class="o5cn7ub4l wm-a"/></g>`,
		"fallback": "withicons:notebook-sketch",
	});
}

export default Component;

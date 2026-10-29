import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xqislxbml.css';
import '../../css/d/do5cn-vuj.css';
import '../../css/r/r3n5yaczg.css';
import '../../css/j/j3_h7f7oi.css';
import '../../css/t/ty867pbrf.css';
import '../../css/p/pstgohcda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xqislxbml"/><path class="do5cn-vuj wm-shadow"/><path class="r3n5yaczg wm-k"/><path class="j3_h7f7oi wm-k"/><path class="ty867pbrf wm-k"/><path class="pstgohcda wm-a"/></g>`,
		"fallback": "withicons:turtle-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f810mgb8e.css';
import '../../css/q/q_de4kb_g.css';
import '../../css/g/gwtyysm7e.css';
import '../../css/a/aahfikpfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f810mgb8e wm-k"/><path class="q_de4kb_g wm-a"/><path class="gwtyysm7e wm-k"/><path class="aahfikpfy wm-a"/></g>`,
		"fallback": "withicons:japanese-yen-sketch",
	});
}

export default Component;

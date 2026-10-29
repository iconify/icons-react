import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ahg3o2b7k.css';
import '../../css/t/tpy81lbbx.css';
import '../../css/z/zmgde5b3b.css';
import '../../css/b/b8f2ikipk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ahg3o2b7k"/><path class="tpy81lbbx wm-a"/><path class="wm-k zmgde5b3b"/><path class="b8f2ikipk wm-a"/></g>`,
		"fallback": "withicons:watch-sketch",
	});
}

export default Component;

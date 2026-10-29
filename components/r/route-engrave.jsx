import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xhp6tur6s.css';
import '../../css/i/ia6ikvh9r.css';
import '../../css/n/n0mw1qblu.css';
import '../../css/o/odnmdzi_x.css';
import '../../css/d/dorpla9vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xhp6tur6s"/><path class="ia6ikvh9r wm-a"/><path class="n0mw1qblu wm-shadow"/><path class="odnmdzi_x wm-k"/><path class="dorpla9vi wm-a"/></g>`,
		"fallback": "withicons:route-engrave",
	});
}

export default Component;

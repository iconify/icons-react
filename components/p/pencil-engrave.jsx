import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qhv7smboy.css';
import '../../css/g/ghuygmbqm.css';
import '../../css/t/tua1e724v.css';
import '../../css/l/lqpi8na-k.css';
import '../../css/j/jm-o6kx0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qhv7smboy wm-k"/><path class="ghuygmbqm wm-a"/><path class="tua1e724v wm-shadow"/><path class="lqpi8na-k wm-k"/><path class="jm-o6kx0w wm-a"/></g>`,
		"fallback": "withicons:pencil-engrave",
	});
}

export default Component;

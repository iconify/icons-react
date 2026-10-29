import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/ws3h1mbaj.css';
import '../../css/y/ygx-4bbhz.css';
import '../../css/c/cdh3yqz5n.css';
import '../../css/z/znt-8tb8p.css';
import '../../css/k/k9yaaohqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k ws3h1mbaj"/><path class="wm-s ygx-4bbhz"/><path class="cdh3yqz5n wm-shadow"/><path class="wm-k znt-8tb8p"/><path class="k9yaaohqa wm-s"/></g>`,
		"fallback": "withicons:phone-off-engrave",
	});
}

export default Component;

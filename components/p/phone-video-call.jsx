import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/h/hmhhaybex.css';
import '../../css/a/a3gl68bbl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="hmhhaybex"/><path class="a3gl68bbl"/></g>`,
		"fallback": "icon-park:phone-video-call",
	});
}

export default Component;

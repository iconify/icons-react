import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xqoljcblo.css';
import '../../css/a/aohk97bww.css';
import '../../css/q/qwyh2jbst.css';
import '../../css/q/qv7q4d64s.css';
import '../../css/m/mhq5vebwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k xqoljcblo"/><path class="aohk97bww wm-a"/><path class="qwyh2jbst wm-k"/><path class="qv7q4d64s"/><path class="mhq5vebwk"/></g>`,
		"fallback": "withicons-bauhaus:thermometer-sun",
	});
}

export default Component;

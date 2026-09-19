import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wl8qihbze.css';
import '../../css/j/j2oelba8n.css';
import '../../css/f/fw48gdx3v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="wl8qihbze"/><path class="j2oelba8n"/><path class="fw48gdx3v"/></g>`,
		"fallback": "icon-park-solid:replay-music",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvn_rxb6v.css';
import '../../css/e/eyg7-wf7e.css';
import '../../css/w/wfijoq2mq.css';
import '../../css/t/tz-ydab7t.css';
import '../../css/m/m2zr24brs.css';
import '../../css/d/d7amhlj7r.css';
import '../../css/b/bwi1ebl6k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvn_rxb6v"/><path class="eyg7-wf7e"/><path class="wfijoq2mq"/><path class="tz-ydab7t"/><path class="m2zr24brs"/><path class="d7amhlj7r"/><path class="bwi1ebl6k"/>`,
		"fallback": "openmoji:older-person-dark-skin-tone",
	});
}

export default Component;

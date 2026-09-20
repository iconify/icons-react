import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbmqdzbzc.css';
import '../../css/f/f61c91d7m.css';
import '../../css/e/e5wiw95_c.css';
import '../../css/s/s6kgnok9r.css';
import '../../css/b/bt_cc470g.css';
import '../../css/u/ust67rb8l.css';
import '../../css/z/z04drlb1l.css';
import '../../css/f/fq0y910ro.css';
import '../../css/v/vbpwtd-ti.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbmqdzbzc"/><path class="f61c91d7m"/><path class="e5wiw95_c"/><path class="s6kgnok9r"/><path class="bt_cc470g"/><path class="ust67rb8l"/><g class="z04drlb1l"><path class="fq0y910ro"/><path class="vbpwtd-ti"/></g>`,
		"fallback": "openmoji:pomegranate",
	});
}

export default Component;

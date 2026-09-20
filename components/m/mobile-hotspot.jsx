import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ytrn8zbfn.css';
import '../../css/h/hus16pvob.css';
import '../../css/h/h3wncwbtp.css';
import '../../css/q/qa6mp3bta.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ytrn8zbfn"/><path class="hus16pvob"/><path class="h3wncwbtp"/><path class="qa6mp3bta"/></g>`,
		"fallback": "marketeq:mobile-hotspot",
	});
}

export default Component;

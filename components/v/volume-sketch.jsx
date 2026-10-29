import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jlc_yjb6o.css';
import '../../css/i/i09ron92k.css';
import '../../css/x/xoi8mrm8l.css';
import '../../css/d/dydwk4bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jlc_yjb6o"/><path class="i09ron92k wm-a"/><path class="wm-k xoi8mrm8l"/><path class="dydwk4bgd wm-a"/></g>`,
		"fallback": "withicons:volume-sketch",
	});
}

export default Component;

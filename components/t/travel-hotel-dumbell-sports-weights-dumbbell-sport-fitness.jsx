import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rav8mkbga.css';
import '../../css/j/jm9s2rr3r.css';
import '../../css/s/s_sm4tfic.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="rav8mkbga"/><rect class="jm9s2rr3r"/><path class="s_sm4tfic"/></g>`,
		"fallback": "streamline:travel-hotel-dumbell-sports-weights-dumbbell-sport-fitness",
	});
}

export default Component;

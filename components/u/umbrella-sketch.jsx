import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p222eqb9m.css';
import '../../css/n/n15o_72hl.css';
import '../../css/q/qvvp1bbua.css';
import '../../css/l/l28o8au4h.css';
import '../../css/v/v9fhfkb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p222eqb9m"/><path class="n15o_72hl wm-k"/><path class="qvvp1bbua wm-a"/><path class="l28o8au4h wm-k"/><path class="v9fhfkb7f wm-a"/></g>`,
		"fallback": "withicons:umbrella-sketch",
	});
}

export default Component;

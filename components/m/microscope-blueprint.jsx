import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mqvi0jboe.css';
import '../../css/x/x5z1w3sgm.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/j/jm7_53b5e.css';
import '../../css/t/ti2a4ibvd.css';
import '../../css/u/uzk_83blg.css';
import '../../css/j/jtm44sb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="mqvi0jboe wm-deco"/><path class="wm-deco x5z1w3sgm"/><path class="rbzq4bjzv wm-deco"/><path class="jm7_53b5e wm-k"/><path class="ti2a4ibvd wm-a"/><path class="uzk_83blg wm-k"/><path class="jtm44sb5k wm-a"/></g>`,
		"fallback": "withicons:microscope-blueprint",
	});
}

export default Component;

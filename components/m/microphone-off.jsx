import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mgjynvbop.css';
import '../../css/n/nyuplcwja.css';
import '../../css/c/cfsulbc1g.css';
import '../../css/j/j_n-5hl9n.css';
import '../../css/w/wd-wa2irw.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mgjynvbop"/><path clip-rule="evenodd" class="nyuplcwja"/><path class="cfsulbc1g"/><path class="j_n-5hl9n"/><path class="wd-wa2irw"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:microphone-off",
	});
}

export default Component;

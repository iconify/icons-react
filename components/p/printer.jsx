import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/si_h8nlvt.css';
import '../../css/i/i817x4i-m.css';
import '../../css/b/bt2vhjbuk.css';
import '../../css/e/e6sihfv7n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="si_h8nlvt"/><path class="i817x4i-m"/><path class="bt2vhjbuk"/><path class="e6sihfv7n"/></g>`,
		"fallback": "pepicons:printer",
	});
}

export default Component;

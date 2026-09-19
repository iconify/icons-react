import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bfziqobfb.css';
import '../../css/c/cbxxtsb9k.css';
import '../../css/t/ti51-gb4g.css';
import '../../css/e/ecwe_bfgh.css';
import '../../css/j/jsunwxbwb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bfziqobfb"/><path clip-rule="evenodd" class="cbxxtsb9k"/><path class="ti51-gb4g"/><path class="ecwe_bfgh"/><path class="jsunwxbwb"/></g>`,
		"fallback": "pepicons:microphone-print",
	});
}

export default Component;

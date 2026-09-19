import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/p/pvvdzwnfo.css';
import '../../css/v/vurxrlbvp.css';
import '../../css/p/puhfr9buo.css';
import '../../css/v/vi-anvyiq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="pvvdzwnfo"/><path class="vurxrlbvp"/></g><path clip-rule="evenodd" class="puhfr9buo"/><path clip-rule="evenodd" class="vi-anvyiq"/></g>`,
		"fallback": "pepicons:rewind-print",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bmujc2bpd.css';
import '../../css/k/kls-km9ps.css';
import '../../css/g/gi71v2m0a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bmujc2bpd"/><path clip-rule="evenodd" class="kls-km9ps"/><path class="gi71v2m0a"/></g>`,
		"fallback": "pepicons:map",
	});
}

export default Component;

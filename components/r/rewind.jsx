import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nr46n3bws.css';
import '../../css/g/g8bi2fbze.css';
import '../../css/j/jpjexkb8q.css';
import '../../css/p/pviybjb8k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nr46n3bws"/><path clip-rule="evenodd" class="g8bi2fbze"/><path class="jpjexkb8q"/><path clip-rule="evenodd" class="pviybjb8k"/></g>`,
		"fallback": "pepicons:rewind",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2zqp8bfe.css';
import '../../css/c/cfav8mbcf.css';
import '../../css/n/nlzzwd22p.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="n2zqp8bfe"/><path clip-rule="evenodd" class="cfav8mbcf"/><path clip-rule="evenodd" class="nlzzwd22p"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:letter-off",
	});
}

export default Component;

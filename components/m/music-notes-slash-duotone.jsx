import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g2zzdt_ir.css';
import '../../css/q/q5yo2eier.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g2zzdt_ir"/><path class="q5yo2eier"/></g>`,
		"fallback": "pullo:music-notes-slash-duotone",
	});
}

export default Component;

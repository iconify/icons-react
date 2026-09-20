import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y3fqx3qzw.css';
import '../../css/n/n1d6mcb2n.css';
import '../../css/e/ew9obfnmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y3fqx3qzw"/><path class="n1d6mcb2n"/><path clip-rule="evenodd" class="ew9obfnmq"/></g>`,
		"fallback": "solar:medical-kit-bold-duotone",
	});
}

export default Component;

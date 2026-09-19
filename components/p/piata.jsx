import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gbqoctb2m.css';
import '../../css/p/pmwftgbrp.css';
import '../../css/b/bz-gxvh-i.css';

const viewBox = {"width":32,"height":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVG4zwUPcCA)" class="cuyn6tgcc"><path class="gbqoctb2m"/><path class="pmwftgbrp"/></g><defs><clipPath id="SVG4zwUPcCA"><path class="bz-gxvh-i"/></clipPath></defs></g>`,
		"fallback": "fluent-emoji-high-contrast:piata",
	});
}

export default Component;

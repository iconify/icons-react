import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ivf2lsxsd.css';
import '../../css/z/zhca2zb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ivf2lsxsd secondary"/><path class="primary zhca2zb3c"/></g>`,
		"fallback": "iconaut:key-duotone",
	});
}

export default Component;

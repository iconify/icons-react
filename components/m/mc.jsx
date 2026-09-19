import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxkj4zo0n.css';
import '../../css/b/bzb25fbpb.css';

const viewBox = {"width":301,"height":241};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zxkj4zo0n"/><path class="bzb25fbpb"/></g>`,
		"fallback": "cif:mc",
	});
}

export default Component;

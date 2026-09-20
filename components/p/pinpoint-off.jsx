import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eabu6b49u.css';
import '../../css/n/n-_zbtbbx.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eabu6b49u"/><path clip-rule="evenodd" class="n-_zbtbbx"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:pinpoint-off",
	});
}

export default Component;

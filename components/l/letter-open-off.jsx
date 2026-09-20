import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gvgx048pg.css';
import '../../css/q/qr5fk4bxt.css';
import '../../css/b/br94sx3cn.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gvgx048pg"/><path clip-rule="evenodd" class="qr5fk4bxt"/><path clip-rule="evenodd" class="br94sx3cn"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:letter-open-off",
	});
}

export default Component;

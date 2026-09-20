import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eh8exrbgk.css';
import '../../css/d/dsyg6jnho.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eh8exrbgk"/><path clip-rule="evenodd" class="dsyg6jnho"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:triangle-right-filled-off",
	});
}

export default Component;
